import { configureStore } from "@reduxjs/toolkit";
import numberSliceReducer from "./reducers/numberSlice";

const store = configureStore({
  reducer: {
    numberSlice: numberSliceReducer,
  },
});

export default store;
