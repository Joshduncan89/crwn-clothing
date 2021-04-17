import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe/StripeButton";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const cartTotal = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item._id} item={item} />
      ))}
      <div className='total'>
        <span>Total: ${cartTotal}</span>
        <StripeButton price={cartTotal} />
      </div>
    </div>
  );
};

export default CheckoutPage;
