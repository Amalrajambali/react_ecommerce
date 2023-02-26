import React, { useContext, useState } from "react";
import "./product-card.css";


function ProductCard({ products }) {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(1);

  async function addToCart(item) {
    await setCartItems([...cartItems, item]);
    await localStorage.setItem("CartItems", JSON.stringify(cartItems));
  }

  return (
    <div class="row">
      {products.map((item) => {
        
        return (
          <div
            class="card"
            className="col-md-2 shadow  p-0 mr-3  mb-4 bg-white rounded pc-content pr-3"
          >
            
            <img
              class="card-img-top"
              src={item.image}
              alt="Card image cap"
              className="image-product"
            />
            <div class="card-body">
              <p class="card-text p-4 pb-0">{item.title}</p>
              <p>{item.rating.count-count}</p>
              <hr/>
              <div style={{ display: "flex",justifyContent:"center" }}>
                <button className="item-btn" onClick={() => setCount(count-1)}>
                  -
                </button>
                 <h4 style={{padding:"7px"}}>{count}</h4> 
                <button className="item-btn" onClick={() => setCount(count+1)}>
                  +
                </button>
              </div>

              <div>
                <h4 class="text-primary mb-1 font-weight-bold pl-4 pb-2">
                  ${item.price}
                </h4>
                <button
                  className="addtocart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
