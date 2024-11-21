'use client'
import { Product } from "@/model/Product";
import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppState } from "@/state/redux/store";
import ProductView from "./ProductView";
import { useTitle } from "@/hooks/useTitle";

const baseUrl = "http://localhost:9000/products";
//const baseUrl = "http://localhost:9000/secure_products";
export default function ListProductsPage() {

    

    const [products, setProducts] = useState<Product[]>([]);
    const [isMessageVisible, setVisible] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const auth = useSelector((state: AppState) => state.auth);
    useTitle("ListProduct");


    useEffect(() => {

        fetchProducts()

    }, [])
    const router = useRouter();

    async function fetchProducts() {

        try {

            // if(!auth.isAuthenticated){
            //     router.push("/login");
            //     return;
            // }

             //delay
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 5000));
            const headers = {Authorization: `Bearer ${auth.accessToken}`};
            const response = await axios.get<Product[]>(baseUrl, {headers});
            console.log("response", response);
            setProducts(response.data);

        } catch (errorResponse) {

            console.log("errorReponse", errorResponse);
        }
        finally{
            setLoading(false);
        }

    }

   const deleteProduct =useCallback( async (product: Product) => {

        try {
            
            const url = `${baseUrl}/${product.id}`;
            await axios.delete(url);
            //await fetchProducts();
            //copy of products
            const copy_of_products = [...products];
            // update the copy
            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index !== -1){
                copy_of_products.splice(index, 1);
            }
            // set state with the copy
            setProducts(copy_of_products);

            alert("record deleted: " + product.id);

        } catch  {
            alert("failed to delete record: " + product.id);
        }

    }, [products])

    const editProduct = useCallback( (product: Product)=> {

        router.push("/products/" + product.id);
    }, []);

    const totalPrice = useMemo( () => {

        console.log("calculating prices");
        let totalPrice = 0;
        products.forEach(prod => {
            if(prod.price){
                totalPrice += prod.price
            }
        })
        return totalPrice;

    }, [products]);

    return (
        <div>
            <h4>List Products</h4>

            <div className="btn btn-success">
                {"Total Prices: " + totalPrice}
            </div>

            {isMessageVisible ? <div className="alert alert-info">This is a demo of a data-driven page</div> : null}
            <br />
            <button className="btn btn-info" onClick={() => setVisible(p => !p)}>{isMessageVisible? 'Hide' : 'Show'}</button>


            {isLoading? <div className="alert alert-success">Products Loading</div> : null}
            
            <div style={{display: "flex", flexFlow: 'row wrap', justifyContent: 'center'}}>


                {products.map(product => {
                    return (
                       <ProductView key={product.id} product={product} onDelete={deleteProduct} onEdit={editProduct}/>
                    )
                })}
            </div>
        </div>
    )
}