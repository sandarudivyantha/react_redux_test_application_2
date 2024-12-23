import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./Reducers/postSlice";

const store = configureStore({
  reducer: {
    post: postSliceReducer,
  },
});

export default store;
