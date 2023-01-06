import React from "react";
import "./Product.css"
function Product(props) {
  return (
    <div>
         <div className="product">
        <div className="product_info">
        <p>{props.title}. </p>
      <p className="product_price">
        <sup>₹</sup>
        <strong>{props.price}</strong>
        </p>
      <p className="product_rating">{props.rating} </p>
        </div>
      
      <img
        src={props.image}
        alt=""
        className="product_image"
        
      />
      <br/ >
      <button className="product_button">Add to basket</button>
    </div>
    </div>
   
  );
}
export default Product;
