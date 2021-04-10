import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  SUBTRACT_QUANTITY_ITEM,
  ADD_QUANTITY_ITEM,
} from "./types";

export const toggleCart = () => async (dispatch) => {
  dispatch({ type: TOGGLE_CART_HIDDEN });
};

export const addItemToCart = (item) => async (dispatch) => {
  dispatch({ type: ADD_CART_ITEM, payload: item });
};

export const deleteCartItem = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CART_ITEM, payload: id });
};

export const subtractQuantity = (id) => async (dispatch) => {
  dispatch({ type: SUBTRACT_QUANTITY_ITEM, payload: id });
};

export const addQuantity = (id) => async (dispatch) => {
  dispatch({ type: ADD_QUANTITY_ITEM, payload: id });
};
