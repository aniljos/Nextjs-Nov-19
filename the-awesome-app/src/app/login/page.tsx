'use client'

import { useLogin } from "./useLogin";


function LoginPage(){

    const  {name, 
        setName, 
        password, 
        setPassword, 
        errorMessage,
        nameInputRef,
        handleSignin} = useLogin();
  

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