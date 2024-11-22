'use client'
import { CartItem } from "@/model/CartItem";
import React, { useReducer } from "react";

export type GadgetsContextState = {
    cart: CartItem[],
    dispatch: (action: GadgetContextAction) => void
}

export const initialThemeState: GadgetsContextState = {
    cart: [],
    dispatch: () => {}
}
export type GadgetContextAction = {
    type: string,
    payload?: CartItem,
    productId?: number
}
//create the context
export const GadgetsContext = React.createContext(initialThemeState);

const reducer = (state: GadgetsContextState, action: GadgetContextAction)=> {

    if(action.type === "addItemToCart" && action.payload){
        const cart = [...state.cart];
        cart.push(action.payload);
        return {
            ...state,
            cart
        }
    }
    if(action.type === "remoteItemToCart" && action.productId){
        

        const filteredCart = state.cart.filter(item => item.product.id !== action.productId);
        return {
            ...state,
            cart: filteredCart
        }
        
    }


    return state;
}

export default function GadgetsContextProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    const [state, dispatch] = useReducer(reducer, initialThemeState);

    return (
        <GadgetsContext.Provider value={{cart: state.cart, dispatch}}>
            {children}
        </GadgetsContext.Provider>
    )
}