import React from "react";
import "./collection-item.style.scss";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import Button from "./../button/button.component";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item__footer">
        <span className="collection-item__name">{name}</span>
        <span className="collection-item__price">{price}$</span>
      </div>
      <Button onClick={() => addItem(item)} extraClasses="button--inverted">
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
