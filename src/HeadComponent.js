import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
import "./HeadComponent.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="header_titlelogo">
          <StorefrontIcon className="header_logoimage" fontSize="large" />
          <h2 className="header_logotitle">E-Shop</h2>
        </div>
      </Link>

      <div className="header_searchbar">
        <input type="text" className="header_searchinput" />
        <SearchIcon className="header_searchicon" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_line-one">Hello Guest </span>
          <span className="nav_line-two">SignIn</span>
        </div>

        <div className="nav_item">
          <span className="nav_line-one">Your </span>
          <span className="nav_line-two">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none", color: "white" }}>
          <div className="nav_item_basket">
            <ShoppingBasketIcon />
            <span className="nav_line-two">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
