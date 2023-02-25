import React from "react";
import SignUp from "../components/Signup/SignUp";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div>
      <Link to="signup">
        <SignUp />
      </Link>
    </div>
  );
}

export default SignupPage;
