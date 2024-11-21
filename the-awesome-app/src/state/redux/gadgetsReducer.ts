import { CartItem } from "@/model/CartItem"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type GadgetsState = {
    cart: CartItem[]
}

export type GadgetsAction = {
    type: string,
    payload?: CartItem,
    id?: number
}

const initialState: GadgetsState = {
    cart : []
}

// {type: "addToCart", payload: cartItem}
// {type: "removeItem", id: 2}
// {type: "clearCart"}
// export const gadgetsReducer = (state=initialState, action: GadgetsAction) => {

//     //console.log("action", action);
//     if(action.type === "addToCart" && action.payload){
//         //state.cart.push(action.payload);
//         const cart_copy = [...state.cart];
//         cart_copy.push(action.payload);

//         return {
//             cart: cart_copy
//         }
//     }
//     return state;
// }


const slice = createSlice({
    name: "gadgets_slice",
    initialState: initialState,
    reducers: {
        addItemToCart: (state: GadgetsState, action: PayloadAction<CartItem>) => {

            state.cart.push(action.payload);
        },
        removeItemFormCart: (state: GadgetsState, action: PayloadAction<number>)=> {

            const index = state.cart.findIndex(item => item.product.id === action.payload);
            if(index !== -1){
                state.cart.splice(index, 1);
            }
        }
    }
});

export const {addItemToCart, removeItemFormCart} = slice.actions;
export const gadgetsReducer = slice.reducer;