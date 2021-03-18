import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from "./types";

export const toggleCart = () => async (dispatch) => {
  dispatch({ type: TOGGLE_CART_HIDDEN });
};

export const addItemToCart = (item) => async (dispatch) => {
  dispatch({ type: ADD_CART_ITEM, payload: item });
};
