import {
  createAsyncThunk,
  createEntityAdapter,
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
  reducers: {
    updatePost: postState.updateOne,
    // (state, action) => {
    //   postState.updateOne(state, action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      if (action.payload?.err) {
        state.loading = "Fail";
        state.error = action.payload.err;
      } else {
        state.loading = "completed";
        postState.addMany(state, action.payload);
      }
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = "Some Error";
    });
  },
});

export const { selectIds, selectAll, selectById, selectEntities, selectTotal } =
  postState.getSelectors((store) => store.post);

// export const selectPostLoading = createSelector(
//   [(store) => store.post.loading],
//   (loading) => loading
// );
export const selectPostLoading = (state) => state.post.loading;

export const { updatePost } = postSlice.actions;

export default postSlice.reducer;
