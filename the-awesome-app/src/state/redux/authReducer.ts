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


// type: "logged_in", payload: {isAuthenticated: true, accesstoken: "",.....}
// type: "logout"
export const authReducer = (currentState=initialState, action: AuthAction) => {

    
    //implement the code to return the updated state
    if(action.type === "logged_in" && action.payload){
        return action.payload;
    }

    if(action.type === "logout"){
        return initialState
    }

    return currentState;
}