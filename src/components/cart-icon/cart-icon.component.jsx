import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as Icon } from "./../../assets/img/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartShown } from "./../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartShown, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartShown}>
    <Icon className="cart-icon__img" />
    <span className="cart-icon__counter">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartShown: () => dispatch(toggleCartShown())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
