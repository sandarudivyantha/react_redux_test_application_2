import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectCart = ({ cart }) => cart;
export const { addItemsToCart } = cartSlice.actions;
export default cartSlice.reducer;
