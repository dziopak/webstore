import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { collectionsFetch } from "./../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

import CollectionContainer from "../collection/collection.container";

const ShopPage = ({ collectionsFetch, match }) => {
  useEffect(() => {
    collectionsFetch();
  }, []);

  const { path } = match;
  return (
    <div className="shop-page">
      <Route exact path={path} component={CollectionsOverviewContainer} />
      <Route path={`${path}/:collection`} component={CollectionContainer} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  collectionsFetch: () => dispatch(collectionsFetch())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);