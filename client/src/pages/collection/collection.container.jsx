import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionsLoaded } from "./../../redux/shop/shop.selectors";

import Spinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoaded: selectCollectionsLoaded
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage);

export default CollectionContainer;
