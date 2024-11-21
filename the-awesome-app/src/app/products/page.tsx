'use client'
import { Product } from "@/model/Product";
import axios from "axios"
import { useEffect, useState } from "react"
import styles from './page.module.css';
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppState } from "@/state/redux/store";

//const baseUrl = "http://localhost:9000/products";
const baseUrl = "http://localhost:9000/secure_products";
export default function ListProductsPage() {

    const [products, setProducts] = useState<Product[]>([]);
    const auth = useSelector((state: AppState) => state.auth);


    useEffect(() => {

        fetchProducts()

    }, [])
    const router = useRouter();

    async function fetchProducts() {

        try {

            if(!auth.isAuthenticated){
                router.push("/login");
                return;
            }

            const headers = {Authorization: `Bearer ${auth.accessToken}`};
            const response = await axios.get<Product[]>(baseUrl, {headers});
            console.log("response", response);
            setProducts(response.data);

        } catch (errorResponse) {

            console.log("errorReponse", errorResponse);
        }

    }

    async function deleteProduct(product: Product){

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

    }

    function editProduct(product: Product){

        router.push("/products/" + product.id);
    }

    return (
        <div>
            <h4>List Products</h4>
            <div style={{display: "flex", flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {
                    return (
                        <div key={product.id} className={styles.product}>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                            <div>
                                <button className="btn btn-warning" onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                                <button className="btn btn-info" onClick={() => editProduct(product)}>Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}