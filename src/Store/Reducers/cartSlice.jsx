import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (id, price, cpu, ram) => ({
        payload: { id, price, cpu, ram },
      }),
    },
  },
});

export const selectCart = ({ cart }) => cart;
export const { addItemsToCart } = cartSlice.actions;
export default cartSlice.reducer;
