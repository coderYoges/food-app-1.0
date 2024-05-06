import { createSlice } from "@reduxjs/toolkit";

export const AuthInitialState = {
  currentPage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    setPage: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
  },
});

export const { setPage } = authSlice.actions;

export default authSlice.reducer;
