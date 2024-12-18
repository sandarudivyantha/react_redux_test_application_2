import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    price: 250000,
    spec: {
      cpu: "i3",
      gen: 13,
      ram: "8GB DDR4",
      hdd: "1TB",
    },
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

export const laptopSliceSelector = (store) => store.laptopSlice;
export const { addLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;
