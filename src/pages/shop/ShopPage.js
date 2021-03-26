import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../../components/category/CollectionPage";
import {
  firestore,
  getCollectionAndDocuments,
} from "../../firebase/firebase.utils";

const ShopPage = ({ match }) => {
  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionData = getCollectionAndDocuments(snapshot);
      console.log(collectionData);
    });
  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
