import React from "react";

import { connect } from "react-redux";
import {
  removeItem,
  reduceQuantity,
  addItem
} from "./../../redux/cart/cart.actions";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, removeItem, reduceQuantity, addItem }) => {
  console.log(cartItem.cartItem);
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="checkout-item__container checkout-item__container--img">
        <img className="checkout-item__img" src={imageUrl} alt={name} />
      </div>

      <div className="checkout-item__container">
        <span className="checkout-item__span">{name}</span>
      </div>

      <div className="checkout-item__container">
        <span className="checkout-item__span">
          <span
            onClick={() => reduceQuantity(cartItem)}
            className="checkout-item__arrow"
          >
            &#10094;
          </span>
          {quantity}
          <span
            onClick={() => addItem(cartItem)}
            className="checkout-item__arrow"
          >
            &#10095;
          </span>
        </span>
      </div>

      <div className="checkout-item__container">
        <span className="checkout-item__span">{price}$</span>
      </div>

      <div className="checkout-item__container checkout-item__container--remove">
        <span
          onClick={() => removeItem(cartItem)}
          className="checkout-item__span"
        >
          &#10006;
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  reduceQuantity: item => dispatch(reduceQuantity(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
