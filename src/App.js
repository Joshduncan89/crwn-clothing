import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import LoginPage from "./pages/login/LoginPage";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={LoginPage} />
      <Route exact path='/' component={HomePage} />
    </Router>
  );
}

export default App;
