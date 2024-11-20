'use client'

import { useParams } from "next/navigation"

export default function EditProduct(){

    const params = useParams();

    return (
        <div>
            <h4>Edit Product : {params.id}</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" type="text" id="desc" />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" />
                </div>
                <br />
                <div>
                    <button className="btn btn-primary">Save</button>&nbsp;
                    <button className="btn btn-warning">Cancel</button>
                </div>
            </form>
        </div>
    )
}