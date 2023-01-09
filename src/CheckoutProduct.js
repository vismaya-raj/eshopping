import React from "react";
import "./CheckoutProduct.css";
export function CheckoutProduct() {
  return (
    <div className="Checkout_product">
      <img
        src="https://m.media-amazon.com/images/I/71lhpSraYML._UL1100_.jpg"
        alt="ZoukBag"
        className="checkout_image"
      />
      <div className="CheckoutProduct_info">
        <p className="CheckoutProduct_title">
          ZOUK Tote Bags for Women - Handmade Bags for Daily Use - Vegan Leather
          Handbags with Double Handle - Printed Totes for Women.
        </p>

        <p className="checkout_price">
          <sup>₹</sup>1703
        </p>

        <div className="checkoutproduct_rating">⭐⭐⭐⭐⭐⭐</div>
      
      
      <div>
        <button>Remove from basket</button>
      </div>
      </div>
    </div>
  );
}
