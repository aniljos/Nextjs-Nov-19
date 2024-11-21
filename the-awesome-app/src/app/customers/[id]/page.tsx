import { Customer } from "@/model/Customer";

type CustomerViewPageProps = {

    params: {id: number}
}

export default async function CustomerViewPage(props: CustomerViewPageProps){

    const url = "http://localhost:9000/customers";
    const response = await fetch(url, {method: "GET"});
    const customers = await response.json() as Customer[];
    const customer = customers.find(item => item.id.toString() === props.params.id.toString());


    return (
        <div>
            <h4>Customer View</h4>
            <p>Customr ID: {props.params.id}</p>

            <p>Name: {customer?.name}</p>
            <p>Location: {customer?.location}</p>
        </div>
    )
}