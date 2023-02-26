import React from "react";
import "./header.css";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase/Config";
import {signOut} from "firebase/auth";


function Header({ activeUser ,setUserActive}) {
  const navigate = useNavigate();

  async function signout()
  {
    await signOut(auth)
    await navigate("/login")
    setUserActive(false)
  }
  let products = JSON.parse(localStorage.getItem("CartItems"));
  let noItems=products.length


  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
          <b>Shopify</b>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="">
                Home 
              </Link>
            </li>
            
          </ul>
      
          <ul class="navbar-nav mr-aut0">
            <li>
              <Link to="/cart" className="btn btn-primary">
              <i class="fa fa-shopping-cart" style={{fontSize:"24px"}}></i><span style={{marginLeft:"5px"}}>{noItems+1}</span>
              </Link>
            </li>

            {/* <li class="nav-item">
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </li> */}
              
            {activeUser ? (
               <li style={{backgroundColor: "black",borderRadius: "12px" }}> <button onClick={signout}>SignOut</button> </li>
            ) : (
              <li class="nav-item">
                <Link to="/signup" className="btn btn-primary">
                  Sign up
                </Link>
              </li>
            )}
            
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
