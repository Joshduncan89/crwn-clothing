import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  SUBTRACT_QUANTITY_ITEM,
  ADD_QUANTITY_ITEM,
} from "../actions/types";
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
    case DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case SUBTRACT_QUANTITY_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          } else {
            return item;
          }
        }),
      };
    case ADD_QUANTITY_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          return item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    default:
      return state;
  }
};
