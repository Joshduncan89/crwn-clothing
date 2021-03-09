import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <Router>
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/' component={HomePage} />
    </Router>
  );
}

export default App;
