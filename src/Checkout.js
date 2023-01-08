import React from "react";
import "./Checkout.css";
import { CheckoutProduct } from "./CheckoutProduct";
import { Subtotal } from "./Subtotal";
export function CheckOut() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1.CB423492668"
          className="checkout_ad"
          alt="ad"
        />

        <div>
          <h2 className="checkout_title">Your Orders</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout_right">
      <Subtotal/>

      </div>
      
    </div>
  );
}
