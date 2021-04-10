import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../actions/cartActions";
import CustomButton from "../formElements/CustomButton";
import CartItem from "./Cart-Item";
import "./CartDropdown.styles.scss";

const CartDropdown = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
            />
          ))
        ) : (
          <span className='empty-cart'>Cart is empty</span>
        )}
      </div>
      <Link to='/checkout'>
        <CustomButton onClick={() => dispatch(toggleCart())}>
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  );
};

export default CartDropdown;
