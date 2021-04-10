import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import LoginPage from "./pages/login/LoginPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Header from "./components/header/Header";
import { useGoogleUser } from "./firebase/firebaseHooks";

function App() {
  const currentUser = useGoogleUser();
  console.log(currentUser, "app component");

  return (
    <Router>
      <Header />
      <Route path='/shop' component={ShopPage} />
      <Route path='/checkout' component={CheckoutPage} />
      <Route path='/signin' component={LoginPage} />
      <Route exact path='/' component={HomePage} />
    </Router>
  );
}

export default App;
