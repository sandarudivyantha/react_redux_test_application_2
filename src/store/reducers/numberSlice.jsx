import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  computers: [],
};

const reducerGen = (key = "number", oparetor = "+") => {
  if (oparetor === "+") {
    return (state, action) => {
      state[key] += action.payload;
    };
  } else if (oparetor === "-") {
    return (state, action) => {
      state[key] -= action.payload;
    };
  }
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: reducerGen(),
    decrement: reducerGen("number", "-"),
  },
});

export const numberSliceSelector = (store) => store.numberSlice;
export const { increment, decrement } = numberSlice.actions;
export default numberSlice.reducer;
