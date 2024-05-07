import { createSlice } from "@reduxjs/toolkit";

export const AuthInitialState = {
  currentPage: "",
  navbarOpened: false
};

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    setPage: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
    setNavbar: (state, action) => ({
      ...state,
      navbarOpened: action.payload
    })
  },
});

export const { setPage, setNavbar } = authSlice.actions;

export default authSlice.reducer;
