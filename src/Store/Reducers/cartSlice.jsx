import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart: {
      reducer: (state, action) => {
        const id = action.payload.id;
        const tempObj = state.find((ele) => ele.id === id);
        if (tempObj) {
          tempObj.count += 1;
        } else {
          state.push(action.payload);
        }
      },
      prepare: (id, price, cpu, ram) => ({
        payload: { id, price, cpu, ram, count: 1 },
      }),
    },
  },
});

export const selectCart = ({ cart }) => cart;
export const { addItemsToCart } = cartSlice.actions;
export default cartSlice.reducer;
