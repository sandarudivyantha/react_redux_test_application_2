import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./Reducers/cartSlice";
import laptopSliceReducer from "./Reducers/laptopSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    laptop: laptopSliceReducer,
  },
});

export default store;
