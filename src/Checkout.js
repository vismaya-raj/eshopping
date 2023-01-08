
import React from "react";
export function CheckOut()
{
    return(
        <div>
            <div className="CheckoutProduct">
            <h3 className="CheckoutProductTitle">Your Orders</h3>
            </div>
            <div className="CheckoutPrdctImg">
                <img src = "https://m.media-amazon.com/images/I/71lhpSraYML._UL1100_.jpg" alt="ZoukBag"/>

            </div>
            <div>
                <p><sup>₹</sup>1703</p>
            </div>
            <div>
                <button>Remove from basket</button>
            </div>

           
        </div>
    )
}