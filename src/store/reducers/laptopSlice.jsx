import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
  brand: [],
};

const laptopSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {
    addLaptop: (state, action) => ({
      count: state.count + action.payload,
    }),
    remLaptop: (state, action) => ({
      count: state.count - action.payload,
    }),
  },
});

export const { addLaptop, remLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;
