import React, { useEffect } from "react";

import "./bestsellers.style.scss";
import { selectBestsellers } from "../../redux/rankings/rankings.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bestsellersFetch } from "../../redux/rankings/rankings.actions";

import CollectionItem from "../collection-item/collection-item.component";

const BestsellersBar = ({ bestsellersFetch, items }) => {
  useEffect(() => {
    bestsellersFetch();
  }, []);
  return (
    <div className="bestsellers-bar">
      <h3 className="bestsellers-title">Bestsellers</h3>
      <p>Top selling products of last month</p>
      <div className="bestsellers-bar__list">
        {items
          ? Object.keys(items.slice(0, 5)).map(item => (
              <CollectionItem key={items[item].id} item={items[item]} />
            ))
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectBestsellers
});

const mapDispatchToProps = dispatch => ({
  bestsellersFetch: () => dispatch(bestsellersFetch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestsellersBar);
