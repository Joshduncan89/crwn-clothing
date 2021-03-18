import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AuthReducer } from "./reducers/AuthReducer";
import { CartReducer, ToggleCartReducer } from "./reducers/CartReducer";

const reducer = combineReducers({
  authReducer: AuthReducer,
  toggleCartReducer: ToggleCartReducer,
  cart: CartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
