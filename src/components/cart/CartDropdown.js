import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../formElements/CustomButton";
import CartItem from "./Cart-Item";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
          />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
