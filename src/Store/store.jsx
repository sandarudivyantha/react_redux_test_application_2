import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./Reducers/postSlice";
import numberSliceReducer from "./Reducers/numberSlice";
import userReducer from "./Reducers/userSlice";

const store = configureStore({
  reducer: {
    post: postSliceReducer,
    user:userReducer,
    number: numberSliceReducer,
  },
});

export default store;
