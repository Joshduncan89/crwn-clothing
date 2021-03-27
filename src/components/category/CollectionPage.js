import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Collection.styles.scss";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPage = ({ match }) => {
  const [collection, setCollection] = useState([]);
  const [title, setTitle] = useState("");
  const collectionName = match.params.collectionId;
  const shop = useSelector((state) => state.shop);
  const { collections: shopData } = shop;

  useEffect(() => {
    const category = (value) => {
      setCollection(shopData[value].items);
      setTitle(shopData[value].title);
    };

    category(collectionName);
  }, [collectionName, shopData]);

  return (
    <div className='collection-page'>
      <div className='title'>{title}</div>
      <div className='items'>
        {collection.map((item) => (
          <CollectionItem
            item={item}
            key={item.id}
            className='collection-item'
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
