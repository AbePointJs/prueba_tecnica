import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products";
import { cartReducer } from "./cart";

// Combina todos los reducers del estado
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

// Main store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
