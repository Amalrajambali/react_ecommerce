import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import "./home.css"
import ProCategories from "../components/product_categories/ProCategories";

function Home({ products ,categories}) {
  return (
    <div>
      <Link to="">
        <Header />
        <Banner />
        <div className="productView-container">
          <div className="pv-heading pb-4">
            <h1 style={{padding:"12px",color:"black"}}>All products</h1>
            <ProductCard products={products} />
          </div>
        </div>

        <div className="pv-heading pb-4">
            <h1 style={{padding:"12px",color:"black"}}>All Categories</h1>
        <ProCategories categories={categories}/>
        </div>
        <Footer />
      </Link>
    </div>
  );
}

export default Home;
