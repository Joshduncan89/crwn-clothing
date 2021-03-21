import React from "react";
import { useDispatch } from "react-redux";
import "./CheckoutItem.styles.scss";
import {
  deleteCartItem,
  addQuantity,
  subtractQuantity,
} from "../../actions/cartActions";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={item.imageUrl} alt='item' />
      </div>
      <span className='name'>{item.name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => dispatch(subtractQuantity(item.id))}
        >
          &#10094;
        </div>
        <span className='value'>{item.quantity}</span>
        <div className='arrow' onClick={() => dispatch(addQuantity(item.id))}>
          &#10095;
        </div>
      </span>
      <span className='price'>{item.price}</span>
      <div
        className='remove-button'
        onClick={() => dispatch(deleteCartItem(item.id))}
      >
        <span>X</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
