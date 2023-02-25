import React from "react";
import Login from "../components/Login/Login";
import { Link } from "react-router-dom";
function LoginPage({setUserActive}) {
  return (
    <div>
        <Login  setUserActive={setUserActive}/>
    </div>
  );
}

export default LoginPage;
