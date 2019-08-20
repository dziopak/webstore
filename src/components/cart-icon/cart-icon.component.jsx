import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as Icon } from "./../../assets/img/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartShown } from "./../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartShown }) => (
  <div className="cart-icon" onClick={toggleCartShown}>
    <Icon className="cart-icon__img" />
    <span className="cart-icon__counter">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartShown: () => dispatch(toggleCartShown())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
