'use client'
import { Product } from "@/model/Product";
import axios from "axios"
import { useEffect, useState } from "react"
import styles from './page.module.css';

const baseUrl = "http://localhost:9000/products";
export default function ListProductsPage() {

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {

        fetchProducts()

    }, [])

    async function fetchProducts() {

        try {

            const response = await axios.get<Product[]>(baseUrl);
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
            await fetchProducts();
            alert("record deleted: " + product.id);

        } catch  {
            alert("failed to delete record: " + product.id);
        }

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
                                <button className="btn btn-info">Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}