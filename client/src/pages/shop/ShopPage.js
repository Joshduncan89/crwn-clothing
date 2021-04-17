import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../../components/category/CollectionPage";
import CollectionProduct from "../../components/collection-product/CollectionProduct";
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
          <Route
            exact
            path={`${match.path}/product/:itemId`}
            component={CollectionProduct}
          />
        </div>
      )}
    </>
  );
};

export default ShopPage;
