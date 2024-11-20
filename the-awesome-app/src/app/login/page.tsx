'use client'
import { useEffect, useRef, useState } from "react";

function LoginPage(){


    const nameInputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        nameInputRef.current?.focus();

    }, [])

    function handleSignin(){

        if(name && password){
            //API call to validate the credentials
            setErrorMessage("");
        }
        else{

            //display an error message
            //alert("Enter the credentials");
            setErrorMessage("Enter the credentials");
        }

    }

    return (
        <div>
            <h4>Login</h4>

            {errorMessage ?  <div className="alert alert-danger">{errorMessage}</div> : null }

            <div className="form-group">
                <label htmlFor="name">UserName</label>
                <input className="form-control" id="name" ref={nameInputRef} value={name} onChange={e => setName(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <br/>

            <button className="btn btn-success" onClick={handleSignin}>Signin</button>
            
        </div>
    )
}

export default LoginPage;