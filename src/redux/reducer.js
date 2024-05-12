import { createSlice, isActionCreator } from "@reduxjs/toolkit";

export const AuthInitialState = {
  currentPage: "",
  navbarOpened: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: AuthInitialState,
  reducers: {
    setPage: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
    setNavbar: (state, action) => ({
      ...state,
      navbarOpened: action.payload,
    }),
    setAuth: (state, action) => ({
      ...state,
      isAuthenticated: action.payload,
    }),
  },
});

export const { setPage, setNavbar, setAuth } = authSlice.actions;

export default authSlice.reducer;
