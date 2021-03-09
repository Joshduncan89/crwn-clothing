import React from "react";
import { SHOP_DATA } from "./shopData";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

const ShopComponent = () => {
  const shopCollections = [...SHOP_DATA];

  return (
    <div className='shop-page'>
      {shopCollections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopComponent;
