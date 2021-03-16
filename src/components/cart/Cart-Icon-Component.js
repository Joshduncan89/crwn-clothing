import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../actions/cartActions";
import "./Cart-Icon.styles.scss";

const CartIconComponent = () => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <>
      <div className='cart-icon' onClick={toggleHandler}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
      </div>
    </>
  );
};

export default CartIconComponent;
