import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchProducts(url: string){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
    }, [])


    async function fetchProducts(){
        try {  
            const resp = await axios.get<Product[]>(url);
            setProducts(resp.data);
            console.log("resp:", resp);

        } catch (error) {
            console.log("error:", error);
        }

    }

    return {products, setProducts};

}