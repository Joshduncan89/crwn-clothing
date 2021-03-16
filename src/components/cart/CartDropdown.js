import React from "react";
import CustomButton from "../formElements/CustomButton";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
