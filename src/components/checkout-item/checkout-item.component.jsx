import React from "react";

import { connect } from "react-redux";
import { removeItem } from "./../../redux/cart/cart.actions";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, removeItem }) => {
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
        <span className="checkout-item__span">{quantity}</span>
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
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
