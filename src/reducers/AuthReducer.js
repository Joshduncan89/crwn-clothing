import { LOGIN_USER } from "../actions/types";

export const AuthReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
