
import Link from "next/link";
import SupplierSearch from "./SupplierSearch";

export default async function SupplierPage(){

  

    return (

        <div>
            <h4>Suppliers</h4>

            <Link href="/suppliers/add">Add Supplier</Link>

            <SupplierSearch/>

         
        </div>

    )

}