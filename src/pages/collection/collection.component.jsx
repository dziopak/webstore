import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "./../../redux/shop/shop.selectors";

import "./collection.style.scss";

const CollectionPage = ({ match, collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h1 className="collection__title">{collection.title.toUpperCase()}</h1>
      <div className="collection__preview">
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection)(state)
});

export default connect(mapStateToProps)(CollectionPage);
