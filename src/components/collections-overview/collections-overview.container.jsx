import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionsLoaded } from "./../../redux/shop/shop.selectors";

import Spinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoaded: selectCollectionsLoaded
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
