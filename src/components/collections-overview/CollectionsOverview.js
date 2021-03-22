import React from "react";
import "./CollectionsOverview.styles.scss";
import { useSelector } from "react-redux";
import PreviewCollection from "../collection-preview/PreviewCollection";
const Collections = () => {
  const shop = useSelector((state) => state.shop);
  const { SHOP_DATA: shopCollections } = shop;

  return (
    <div className='collections-overview'>
      {Object.values(shopCollections).map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} id={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Collections;
