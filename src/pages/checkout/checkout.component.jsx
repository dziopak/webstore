import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "./../../redux/cart/cart.selectors";

import "./checkout.style.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-page__header">
      <div className="checkout-page__header-block">
        <span className="checkout-page__block-title">Product</span>
      </div>
      <div className="checkout-page__header-block">
        <span className="checkout-page__block-title">Description</span>
      </div>
      <div className="checkout-page__header-block">
        <span className="checkout-page__block-title">Quantity</span>
      </div>
      <div className="checkout-page__header-block">
        <span className="checkout-page__block-title">Price</span>
      </div>
      <div className="checkout-page__header-block">
        <span className="checkout-page__block-title">Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <span>{item.name}</span>
    ))}
    <div className="checkout-page__total">{cartTotal}$</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
