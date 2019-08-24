import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionsFetchAsync } from "./../../redux/shop/shop.actions";
import {
  selectCollectionFetching,
  selectCollectionsLoaded
} from "./../../redux/shop/shop.selectors";

import Spinner from "./../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewLoading = Spinner(CollectionsOverview);
const CollectionPageLoading = Spinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { collectionsFetchAsync } = this.props;
    collectionsFetchAsync();
  }

  render() {
    const { path } = this.props.match;
    const { match, isFetching, isLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={path}
          render={props => (
            <CollectionsOverviewLoading isLoading={!isLoaded} {...props} />
          )}
        />
        <Route
          path={`${path}/:collection`}
          render={props => (
            <CollectionPageLoading isLoading={!isLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  collectionsFetchAsync: () => dispatch(collectionsFetchAsync())
});

const mapStateToProps = createStructuredSelector({
  isFetching: selectCollectionFetching,
  isLoaded: selectCollectionsLoaded
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
