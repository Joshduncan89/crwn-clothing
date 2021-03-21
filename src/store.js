import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AuthReducer } from "./reducers/AuthReducer";
import { CartReducer, ToggleCartReducer } from "./reducers/CartReducer";
import { DirectoryReducer } from "./reducers/DirectoryReducer";
import { ShopReducer } from "./reducers/ShopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const reducer = combineReducers({
  authReducer: AuthReducer,
  toggleCartReducer: ToggleCartReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  shop: ShopReducer,
});

const middleware = [thunk];

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  pReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
