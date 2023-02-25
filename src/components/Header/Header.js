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
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <ul class="navbar-nav mr-aut0">
            <li>
              <Link to="/cart" className="btn btn-primary">
                Cart
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
