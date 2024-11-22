import { Customer } from "@/model/Customer";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";


export const metadata: Metadata = {
    title: "Next App Customers",
    
};


export default async function ListCustomers(){

    //delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    return (
        <div>
            <h4>List of Customers</h4>
            <p>This is an example streaming and suspense</p>

            <Suspense fallback={<div className="alert alert-info">Loading customers #1</div>}>
                <CustomerView interval={5000}/>
            </Suspense>
           
            <Suspense fallback={<div className="alert alert-warning">Loading customers #2</div>}>
                <CustomerView interval={10000}/>
            </Suspense>
        </div>
    )
}

type CustomerViewProps = {
    interval: number
}

export async function CustomerView(props: CustomerViewProps){

    //delay
    await new Promise(resolve => setTimeout(resolve, props.interval));
    //api call
    const url = "http://localhost:9000/customers";
    //const response = await axios.get<Customer[]>(url);
    //const customers = response.data;
    const response = await fetch(url, {cache: 'no-store'});
    const customers = await response.json() as Customer[];



    console.log("customers", customers);

    return (
        <div>
            <h4>Customers</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        
                        return (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td><Link href={"/customers/" + customer.id}> {customer.name}</Link></td>
                                <td>{customer.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}