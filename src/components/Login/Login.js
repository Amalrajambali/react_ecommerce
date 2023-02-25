import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/Config";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom"
function Login({setUserActive}) {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();

  const navigate = useNavigate();

  async function Login(e){
    try{
    e.preventDefault()
    await signInWithEmailAndPassword(auth,email,password)
    await setUserActive(true)
    await navigate("/")

    }
    catch(err)
    {
      alert(err);
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={Login}>
      <h2>Login</h2>
        <div class="form-outline mb-4" >
          <input type="email" id="form2Example1" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>


        <button type="submit" class="btn btn-primary btn-block mb-4">
          Login
        </button>

        <div class="text-center">
          <p>
            Not a member? <Link to="/signup" className="">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
