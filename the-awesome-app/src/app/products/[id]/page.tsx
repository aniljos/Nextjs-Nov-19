'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useParams } from "next/navigation"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProduct(){

    const params = useParams();
    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));
    const router = useRouter();

    useEffect(() => {

        fetchProduct();

    }, [])

    async function fetchProduct(){
        try {
            
            const resp = await axios.get<Product>("http://localhost:9000/products/" + params.id);
            setProduct(resp.data);

        } catch  {
            alert("Failed to fetch data");
        }
    }

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){

        // const value = evt.target.value;
        // const copy_of_product = {...product};
        // copy_of_product.name = value;
        // setProduct(copy_of_product);

        setProduct({...product, name: evt.target.value});
    }

    async function save(e: MouseEvent){
        e.preventDefault();

        try {
            
            await axios.put("http://localhost:9000/products/" + product.id, product);
            router.back();

        } catch  {
            
        }

    }
    function cancel(e: MouseEvent){
        e.preventDefault();
        router.back();
    }

    return (
        <div>
            <h4>Edit Product : {params.id}</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={product.name} onChange={handleNameChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" type="text" id="desc" value={product.description}
                                                    onChange={e => setProduct({...product, description: e.target.value})} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" value={product.price}
                                                onChange={e => setProduct({...product, price: Number(e.target.value)})}/>
                </div>
                <br />
                <div>
                    <button className="btn btn-primary" onClick={save}>Save</button>&nbsp;
                    <button className="btn btn-warning" onClick={cancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}