import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./Reducers/cartSlice";

const store = configureStore({
  cart: cartSliceReducer,
});

export default store;
