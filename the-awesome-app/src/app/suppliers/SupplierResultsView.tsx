import { Supplier } from "@/model/Supplier";

type SupplierResultsViewProps = {
    query: string
}

export default async function SupplierResultsView(props: SupplierResultsViewProps){

    const url = "http://localhost:3001/api/suppliers?query=" + props.query;
    const response = await fetch(url, {cache: 'no-cache'});
    const suppliers = await response.json() as Supplier[];

    return (

        <div>
            <h5>Results</h5>

            <table className="table">
                <thead>
                    <tr>
                        <th>Supplier ID</th>
                        <th>Name</th>
                        <th>Contact Person</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => {

                        return (
                            <tr key={supplier.id}>
                                <td>{supplier.id}</td>
                                <td>{supplier.name}</td>
                                <td>{supplier.contactPerson}</td>
                                <td>{supplier.email}</td>
                                <td>{supplier.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )


}