import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const postState = createEntityAdapter({
  selectId: (ele) => ele.id,
});

const initialState = postState.getInitialState({
  loading: "idle",
  error: null,
});

export const getPost = createAsyncThunk("getPost", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  if (Array.isArray(data)) {
    return data;
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

const selAllPost = (store) => {
  return store.post;
};

export const selectAllPost = createSelector([selAllPost], (post) => {
  console.log("Post is running");
  return {
    loading: post.loading,
    postCount: post.data.length,
  };
});

export default postSlice.reducer;
