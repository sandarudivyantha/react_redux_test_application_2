import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const usersState = createEntityAdapter({
  selectId: (user) => user.id,
});

const initialState = usersState.getInitialState({
  loading: "idle",
  error: null,
});

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (Array.isArray(data)) {
    return data;
  } else {
    return { err: "Some Error" };
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // updateUsers: usersState.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = "completed";
      if (action.payload.err === undefined) {
        usersState.addMany(state, action.payload);
      } else {
        state.loading = "Failed";
        state.error = action.payload.err;
      }
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = "Some Error";
    });
  },
});

export const {
    selectIds: selectIdsUser,
    selectAll: selectAllUser,
    selectById: selectByIdUser,
    selectEntities: selectEntitiesUser,
    selectTotal: selectTotalUser,
  } = usersState.getSelectors((store) => store.user); 

export default userSlice.reducer;
