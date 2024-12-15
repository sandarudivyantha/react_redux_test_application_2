import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/number";

const store = configureStore({
  reducer,
});

export default store;
