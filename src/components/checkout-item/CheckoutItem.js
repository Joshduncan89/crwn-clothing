import React from "react";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ item }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={item.imageUrl} alt='item' />
      </div>
      <span className='name'>{item.name}</span>
      <span className='quantity'>{item.quantity}</span>
      <span className='price'>{item.price}</span>
      <div className='remove-item'>
        <span>X</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
