import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useTitle } from "@/hooks/useTitle";

export function useLogin(){

    const nameInputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();
    useTitle("Login");

    useEffect(() => {

        nameInputRef.current?.focus();
        //document.title = document.title + " " + "Login";

    }, [])

    async function handleSignin(){

        if(name && password){
            //API call to validate the credentials
            setErrorMessage("");
            const loginUrl = "http://localhost:9000/login";
            // axios
            //     .post(loginUrl, {name, password})
            //     .then((response) => {
            //         console.log("response", response);
            //     }, (errorResponse) => {

            //         console.log("errorResponse", errorResponse);
            //     })

            try {
                
                const response = await axios.post<{accessToken: string, refreshToken: string}>(loginUrl, {name, password});
                console.log("response", response);
                dispatch({type:"logged_in", payload: {
                    isAuthenticated: true,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                    userName: name
                }})
                router.push("/products");

            } catch (errorResponse) {
                console.log("errorResponse", errorResponse);
                setErrorMessage("Invalid credentials");
                dispatch({type: "logout"});
            }


        }
        else{

            //display an error message
            //alert("Enter the credentials");
            setErrorMessage("Enter the credentials");
        }

    }
    return {name, 
                setName, 
                password, 
                setPassword, 
                errorMessage,
                nameInputRef,
                handleSignin}
}