import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartShown } from "../../redux/cart/cart.actions";

import Button from "./../button/button.component";
import CartItem from "./../cart-item/cart-item.component";

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems, history, toggleCartShown }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__list">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="cart-dropdown__message">Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        history.push("/shop/checkout");
        toggleCartShown();
      }}
    >
      Checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartShown: cart => dispatch(toggleCartShown())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropdown)
);
