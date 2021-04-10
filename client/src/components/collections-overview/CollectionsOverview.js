import React from "react";
import "./CollectionsOverview.styles.scss";
import { useSelector } from "react-redux";
import PreviewCollection from "../collection-preview/PreviewCollection";
const Collections = () => {
  const shop = useSelector((state) => state.shop);
  const { collections } = shop;

  return (
    <div className='collections-overview'>
      {collections
        ? Object.values(collections).map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} id={id} {...otherCollectionProps} />
          ))
        : []}
    </div>
  );
};

export default Collections;
