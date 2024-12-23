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
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = "completed";
      state.data = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = "rejected";
    });
  },
});

export const selectAllPost = ({ post }) => post;
export default postSlice.reducer;
