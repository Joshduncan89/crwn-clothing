import React from "react";
import { useDispatch } from "react-redux";
import "./CollectionItem.styles.scss";
import CustomButton from "../formElements/CustomButton";
import { addItemToCart } from "../../actions/cartActions";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className='collection-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItemToCart(item))}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
