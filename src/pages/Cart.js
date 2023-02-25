import React from 'react'
import { Link } from "react-router-dom";
import Cart from '../components/Cart/Cart';
function CartPage() {
  return (
    <div>
        <Link to="cart">
            <Cart/>
        </Link>
    </div>
  )
}

export default CartPage