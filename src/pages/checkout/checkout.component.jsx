import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "./../../redux/cart/cart.selectors";

import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

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
      <div className="checkout-page__header-block checkout-page__header-block--short">
        <span className="checkout-page__block-title">Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="checkout-page__total">{cartTotal}$</div>
    <StripeButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
