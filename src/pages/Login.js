import React from "react";
import Login from "../components/Login/Login";

function LoginPage({setUserActive}) {
  return (
    <div>
        <Login  setUserActive={setUserActive}/>
    </div>
  );
}

export default LoginPage;
