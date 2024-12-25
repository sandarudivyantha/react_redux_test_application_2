import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const increment = createAction("number-increment");
export const decrement = createAction("number-decrement");

const numberReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.number += action.payload;
  });
  builder.addCase(decrement, (state, action) => {
    state.number -= action.payload;
  });
});

export const numberSelector = (store) => store.number.number;
export default numberReducer;
