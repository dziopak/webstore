import CartActionTypes from "./cart.types";
import { addItemToCart, reduceItemQuantity } from "./cart.utils";

const INITIAL_STATE = {
  show: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_SHOWN:
      return {
        ...state,
        show: !state.show
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    case CartActionTypes.REDUCE_QUANTITY:
      return {
        ...state,
        cartItems: reduceItemQuantity(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_CART:
      console.log("reducer");
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};

export default cartReducer;
