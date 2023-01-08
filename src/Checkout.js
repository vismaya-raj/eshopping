import React from "react";
export function CheckOut() {
  return (
    <div className="Checkout_product">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1.CB423492668"
        className="checkout_ad"
        alt="ad"
      />
      <div className="CheckoutProduct_info">
        <h3 className="CheckoutProductTitle">Your Orders</h3>
        <p className="CheckoutProduct_title">
          ZOUK Tote Bags for Women - Handmade Bags for Daily Use - Vegan Leather
          Handbags with Double Handle - Printed Totes for Women.
        </p>
        <img
          src="https://m.media-amazon.com/images/I/71lhpSraYML._UL1100_.jpg"
          alt="ZoukBag"
          className="checkout_image"
        />
        <p className="checkout_price">
          <sup>₹</sup>1703
        </p>
      </div>
      <div className="checkoutproduct_rating">⭐⭐⭐⭐⭐⭐</div>
      <button className="Checkout_basket">Remove from basket</button>
    </div>
  );
}
