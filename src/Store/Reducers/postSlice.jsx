import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

export const getPost = createAsyncThunk("getPost", async (name) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  if (Array.isArray(data)) {
    return {
      name,
      data,
    };
  } else {
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
      if (action.payload.err) {
        state.loading = "Fail";
      } else {
        state.loading = "completed";
        state.data = action.payload;
      }
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = "Some Error";
    });
  },
});

export const selectAllPost = ({ post }) => post;
export default postSlice.reducer;
