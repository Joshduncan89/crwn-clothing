import React from "react";
import "./Collections.styles.scss";
import { useSelector } from "react-redux";
import PreviewCollection from "../../components/collection-preview/PreviewCollection";
const Collections = () => {
  const shop = useSelector((state) => state.shop);
  const { SHOP_DATA: shopCollections } = shop;

  return (
    <div className='collections-overview'>
      {shopCollections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} id={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Collections;
