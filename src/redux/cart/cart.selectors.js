import { createSelector } from "reselect";
import { create } from "domain";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartVisible = createSelector(
  [selectCart],
  cart => cart.show
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
