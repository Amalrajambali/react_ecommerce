import React from "react";
import Login from "../components/Login/Login";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div>
      <Link to="login">
        <Login />
      </Link>
    </div>
  );
}

export default LoginPage;
