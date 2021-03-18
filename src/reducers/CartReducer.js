import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from "../actions/types";
import { addCartItem } from "./utils";

export const ToggleCartReducer = (state = { hidden: true }, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export const CartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
