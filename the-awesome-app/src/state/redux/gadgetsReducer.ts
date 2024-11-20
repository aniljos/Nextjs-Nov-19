export type GadgetsState = {
    cart: string[]
}

export type GadgetsAction = {
    type: string
}

const initialState: GadgetsState = {
    cart : []
}

export const gadgetsReducer = (state=initialState, action: GadgetsAction) => {

    console.log("action", action);
    return state;
}