import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import reducer from "./auth/reducer";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  authReducer: reducer,
  products: productsReducer,
  cartReducer: cartReducer,
});

const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default Store;
