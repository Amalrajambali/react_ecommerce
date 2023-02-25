import React, { useState,useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'

function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  }

  async function allCategories()
  {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    setCategories(data);
  }

  useEffect(() => {
    getProducts();
    allCategories();
  }, []);
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home products={products} categories={categories}/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path="/cart" element={<Cart/>}/>
             </Routes>
        </Router>
       
    </div>
  )
}

export default App
