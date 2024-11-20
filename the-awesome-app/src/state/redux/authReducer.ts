export type AuthState = {

    isAuthenticated: boolean,
    accessToken: string,
    refreshToken: string,
    userName: string
}

export type AuthAction = {
    type: string,
    payload?: AuthState
}

const initialState: AuthState = {

    isAuthenticated: false,
    accessToken: "",
    refreshToken: "",
    userName: ""
}



export const authReducer = (currentState=initialState, action: AuthAction) => {

    console.log("action", action);
    //implement the code to return the updated state
    return currentState;
}