import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeadComponent from "./HeadComponent";
import Home from "./Home";

import { CheckOut } from "./Checkout";

export function App() {
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <>
              <HeadComponent />
              <Home />
            
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <>
              <HeadComponent />
              <CheckOut />
            </>
          }
        ></Route>

    
      </Routes>
    </Router>
  );
}
