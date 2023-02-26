import React, { useState,useEffect, createContext } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import Header from './components/Header/Header'


function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const[activeUser,setUserActive]=useState(false);

  //get all products
  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  }

  //get all the categories
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
        <Header activeUser={activeUser} setUserActive={setUserActive} />
            <Routes>
                <Route path='/' element={<Home products={products} categories={categories} activeUser={activeUser} setUserActive={setUserActive} /> }/>
                <Route path='/login' element={<Login setUserActive={setUserActive}/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path="/cart" element={<Cart/>}/>
             </Routes>
        </Router>
       
    </div>
  )
}

export default App
