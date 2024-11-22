'use client'
import { CartItem } from "@/model/CartItem";
import { GadgetsContext } from "@/state/context/GadgetsContext";


import { useContext } from "react";


function ViewCart(){

    const gadgetsContext = useContext(GadgetsContext);
   
    function remove(item: CartItem) {

        if(item.product.id){
            gadgetsContext.dispatch({type: "remoteItemToCart", productId: item.product.id});
        }
       
    }
    return (
        <div>
            <h1>View Cart</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {gadgetsContext.cart.map((item, index) => {
                   

                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" onClick={() => { remove(item) }}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );

}

export default ViewCart;