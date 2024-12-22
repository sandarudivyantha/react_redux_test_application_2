import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    price: 150000,
    cpu: "i7",
    ram: "8GB",
  },
  {
    id: 2,
    price: 100000,
    cpu: "i7",
    ram: "4GB",
  },
  {
    id: 3,
    price: 175000,
    cpu: "i5",
    ram: "16GB",
  },
  {
    id: 4,
    price: 200000,
    cpu: "i9",
    ram: "8GB",
  },
  {
    id: 5,
    price: 250000,
    cpu: "i9",
    ram: "16GB",
  },
];

const laptopSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {
    addLaptop: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;
