import { LOGIN_USER } from "./types";

export const setCurrentUser = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_USER, payload: user });
};
