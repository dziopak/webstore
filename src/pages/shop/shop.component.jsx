import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  const { path } = match;
  return (
    <div className="shop-page">
      <Route exact path={path} component={CollectionsOverview} />
      <Route path={`${path}/:collection`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
