'use client'
import {sayHello, handleSupplierSubmit} from '@/actions/actions';
import { MouseEvent } from 'react';
import { useFormState } from 'react-dom';

export default function AddSupplierPage() {

    const [formStatus, formAction] = useFormState(handleSupplierSubmit, {status: -1, message: ""});

    async function invokeServerAction(evt: MouseEvent){

        evt.preventDefault();
        const result = await sayHello("server actions");
        alert("result: " + result);
    }

    return (
        <div>
            <h4>Add Supplier</h4>

            <button className="btn btn-success" onClick={invokeServerAction}>Invoke Server Action</button>

            <form action={formAction}>

                <div className='alert alert-info'>
                    status: {formStatus.status} message: {formStatus.message}
                </div>

                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input id="id" name="supplierId" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="supplierName" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input id="location" name="location" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactPerson">Contact</label>
                    <input id="contactPerson" name="contactPerson" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" className="form-control" />
                </div>
                <br />
                <button className="btn btn-info">Save</button>
            </form>
        </div>
    )
}