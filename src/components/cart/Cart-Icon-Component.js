import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../actions/cartActions";
import "./Cart-Icon.styles.scss";

const CartIconComponent = () => {
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(0);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    setTotalItems(
      cartItems.reduce((acc, cartItems) => {
        return acc + cartItems.quantity;
      }, 0)
    );
  }, [cartItems]);

  const toggleHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <>
      <div className='cart-icon' onClick={toggleHandler}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{totalItems}</span>
      </div>
    </>
  );
};

export default CartIconComponent;
