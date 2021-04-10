import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../../components/category/CollectionPage";
import { getProducts } from "../../actions/shopActions";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  const shop = useSelector((state) => state.shop);
  const { isFetching } = shop;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <div className='shop-page'>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
          />
        </div>
      )}
    </>
  );
};

export default ShopPage;
