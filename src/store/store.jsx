import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
  number: 0,
};

const reducer = (state = defaultState, action) => {
  return state;
};

const store = configureStore({
  reducer
});

export default store;
