import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Collection.styles.scss";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPage = ({ match }) => {
  const [collection, setCollection] = useState([]);
  const [obj, setObj] = useState();
  const [title, setTitle] = useState("");
  const collectionName = match.params.collectionId;
  const shop = useSelector((state) => state.shop);
  const { collections: shopData } = shop;

  useEffect(() => {
    if (obj) {
      setCollection(obj.items);
      setTitle(obj.title);
    } else {
      const elem = shopData.find((i) => {
        return i.routeName === collectionName;
      });
      setObj(elem);
    }
  }, [collectionName, obj, collection, shopData]);

  return (
    <>
      {obj && (
        <div className='collection-page'>
          <div className='title'>{title.toUpperCase()}</div>
          <div className='items'>
            {collection.map((item) => (
              <CollectionItem
                item={item}
                key={item._id}
                className='collection-item'
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionPage;
