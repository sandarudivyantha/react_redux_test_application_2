import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

export const getPost = createAsyncThunk("getPost", async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    if (data) {
      return data;
    } else {
      return { err: "Some Error" };
    }
  } catch (error) {
    return { err: "Some Error" };
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const selectPost = ({ post }) => post;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
