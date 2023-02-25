import React from "react";
import "./product-card.css";

function ProductCard({ products, addToCart }) {
  console.log(products, addToCart);
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
              <div style={{ display: "flex" }}>
                <h4 class="text-primary mb-1 font-weight-bold pl-4 pb-2">
                  {item.price}
                </h4>
                <p class="pl-4">Cape Handastone</p>
              </div>
              {addToCart?
                <div style={{marginLeft: "100px"}}>
                  <button className="addtocart-btn">Add to cart</button>
                </div>:""
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
