'use server'

export async function sayHello(msg: string){

    // access database
    // access the file system
    // send email
    return "Hello " + msg;
}

export async function handleSupplierSubmit(prevData: object, formData: FormData){

    const supplier = {
        id: formData.get("supplierId"),
        name: formData.get("supplierName"),
        location: formData.get("location"),
        contactPerson: formData.get("contactPerson"),
        email: formData.get("email"),
    }
    

    console.log("supplier", supplier);

    if(supplier.id){
        //save to the database
        return {status: 0, message: "success"}
    }
    else{
        return {status: 0, message: "invalid supplier id."}
    }
}