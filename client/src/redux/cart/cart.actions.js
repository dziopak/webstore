import { CartActionTypes } from "./cart.types";

export const toggleCartShown = () => ({
  type: CartActionTypes.TOGGLE_CART_SHOWN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const reduceQuantity = item => ({
  type: CartActionTypes.REDUCE_QUANTITY,
  payload: item
});

export const clearCart = () => {
  return {
    type: CartActionTypes.CLEAR_CART
  };
};
