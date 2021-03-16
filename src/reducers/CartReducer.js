import { TOGGLE_CART_HIDDEN } from "../actions/types";

export const CartReducer = (state = { hidden: true }, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
