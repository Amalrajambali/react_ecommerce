import React, { useState } from 'react'
import "./signup.css"
import { Link } from "react-router-dom";
import { auth } from '../../firebase/Config';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom"


function SignUp() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");


  const navigate = useNavigate();

  async function SignIn(e)
  {
    try{
      e.preventDefault()
      await createUserWithEmailAndPassword(auth,email,password)
      await navigate("/login")
      
    }
   catch(err)
   {
    alert(err)
   }
  }

  // auth.currentUser.email

  return (
    <div className="login-container">
    <form className="login-form" onSubmit={SignIn}>
    <h2>Sign Up</h2>
      <div class="form-outline mb-4" >
        <input type="email" id="form2Example1" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
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
        Sign Up
      </button>

      <div class="text-center">
        <p>
          Already a user ? <Link to="/login" className="">Log in</Link>
        </p>
      </div>
    </form>
    
  </div>
  )
}

export default SignUp
