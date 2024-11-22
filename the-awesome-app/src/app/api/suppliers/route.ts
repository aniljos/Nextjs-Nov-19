import { NextResponse } from "next/server";
import {suppliers} from '@/data/supplier-data';

// GET http://localhost:3000/api/suppliers
//GET


export function GET(request: Request){

    const url = new URL(request.url);
    const query = url.searchParams.get("query");

    //connect to a database

    if(query){
        const filteredSuppliers = suppliers.filter(item => 
                                            item.name.toLowerCase().includes(query.toLowerCase()) || 
                                            item.location.toLowerCase().includes(query.toLowerCase()) ||
                                            item.contactPerson.toLowerCase().includes(query.toLowerCase()));
        return NextResponse.json(filteredSuppliers, {status: 200, statusText: "OK"})                          
    }

    
    return NextResponse.json(suppliers, {status: 200, statusText: "OK"})
    //return NextResponse.json({message: "Hello Nextjs"}, {status: 200, statusText: "OK"})

}

//POST http://localhost:3000/api/suppliers
//POST

export async function POST(request: Request){

    const supplier = await request.json();

    if(supplier){
        suppliers.push(supplier);
        return NextResponse.json(supplier, {status:200});
    }
    else{
        return NextResponse.json({message: "invalid data"}, {status: 400});
    }
}


//DELETE http://localhost:3000/api/suppliers
//POST