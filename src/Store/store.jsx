import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./Reducers/postSlice";
import numberSliceReducer from "./Reducers/numberSlice";

const store = configureStore({
  reducer: {
    post: postSliceReducer,
    number: numberSliceReducer,
  },
});

export default store;
