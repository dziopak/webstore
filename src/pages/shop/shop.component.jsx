import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { collectionsFetch } from "./../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

import CollectionContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { collectionsFetch } = this.props;
    collectionsFetch();
  }

  render() {
    const { path } = this.props.match;
    return (
      <div className="shop-page">
        <Route exact path={path} component={CollectionsOverviewContainer} />
        <Route path={`${path}/:collection`} component={CollectionContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  collectionsFetch: () => dispatch(collectionsFetch())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
