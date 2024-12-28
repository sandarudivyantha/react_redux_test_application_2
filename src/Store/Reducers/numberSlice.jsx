import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  users: [],
};

export const increment = createAction(
  "number-increment",
  (name, value, city) => {
    return {
      payload: {
        name,
        value,
        city,
      },
    };
  }
);

export const decrement = createAction("number-decrement");

export const getUsers = createAsyncThunk("number/getUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  if (Array.isArray(data)) {
    return data;
  } else {
    return { err: "Some Error" };
  }
});

const numberReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.number += action.payload.value;
  });
  builder.addCase(decrement, (state, action) => {
    state.number -= action.payload.value;
  });
  builder.addCase(getUsers.fulfilled, (state, action) => {
    state.users = action.payload;
  });
});

const numberSel = (store) => {
  return store.number.number;
};

export const numberSelector = createSelector([numberSel], (num) => {
  console.log("Number is running");
  return num;
});
export default numberReducer;
