import React from "react";
import ReactDOM from "react-dom/client";

// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// import HeadComponent from "./HeadComponent";
// import Home from "./Home";
// import { CheckOut } from "./Checkout";
import reportWebVitals from "./reportWebVitals";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 
{/* 
    <HeadComponent />
    <Home /> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
