import { configureStore } from "@reduxjs/toolkit";
import numberSliceReducer from "./reducers/numberSlice";
import number2SliceReducer from "./reducers/number2Slice";
import laptopSliceReducer from "./reducers/laptopSlice"

const store = configureStore({
  reducer: {
    numberSlice: numberSliceReducer,
    number2Slice: number2SliceReducer,
    laptopSlice: laptopSliceReducer
  },
});

export default store;
