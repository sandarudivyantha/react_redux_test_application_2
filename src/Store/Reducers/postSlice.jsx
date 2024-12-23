import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectPost = ({ post }) => post;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
