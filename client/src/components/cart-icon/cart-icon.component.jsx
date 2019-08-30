import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartShown } from "./../../redux/cart/cart.actions";

import { ReactComponent as Icon } from "./../../assets/img/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIcon = ({ toggleCartShown, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartShown}>
    <Icon className="cart-icon__img" />
    <span className="cart-icon__counter">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartShown: () => dispatch(toggleCartShown())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
