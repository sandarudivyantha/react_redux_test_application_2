import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number2: 0,
};

const number2Slice = createSlice({
  name: "number2",
  initialState,
  reducers: {
    increment2: (state, action) => {
      state.number2 += action.payload;
    },
    decrement2: (state, action) => {
      state.number2 -= action.payload;
    },
  },
});

export const numberSlice2Selector = (store) => store.number2Slice;
export const { increment2, decrement2 } = number2Slice.actions;
export default number2Slice.reducer;
