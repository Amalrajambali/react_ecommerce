import React from "react";
import "./cart.css";


function Cart() {
  let products = JSON.parse(localStorage.getItem("CartItems"));
  console.log(products);

  function removeItem(item) {
    let updateItems = products.filter((data) => data.id !== item.id);
    localStorage.setItem("CartItems", JSON.stringify(updateItems));
  }

  return (
    <div className="cart-style">
      <h2 style={{textAlign:"center",padding:"10px"}}>Cart</h2>
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
                <div>
                  <h4 class="text-primary mb-1 font-weight-bold pl-4 pb-2">
                    ${item.price}
                  </h4>
                  <button
                    className="addtocart-btn"
                    onClick={() => removeItem(item)}
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
