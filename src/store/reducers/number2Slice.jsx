import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const number2Slice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.number += action.payload;
    },
    decrement: (state, action) => {
      state.number -= action.payload;
    },
  },
});

export const { increment, decrement } = number2Slice.actions;
export default number2Slice.reducer;
