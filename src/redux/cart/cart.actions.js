import { CartActionTypes } from "./cart.types";

export const toggleCartShown = () => ({
  type: CartActionTypes.TOGGLE_CART_SHOWN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
