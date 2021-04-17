import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
      <div className='buttons'>
        <Link to={`/shop/product/${item._id}`}>
          <CustomButton view inverted>
            VIEW
          </CustomButton>
        </Link>
        <CustomButton inverted onClick={() => dispatch(addItemToCart(item))}>
          ADD TO CART
        </CustomButton>
      </div>
    </div>
  );
};

export default CollectionItem;
