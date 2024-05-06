import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import { AuthInitialState } from "./reducer";
import AuthReducer from "./reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

const initialStoreState = {
  auth: AuthInitialState,
};

const appReducer = combineReducers({
  auth: AuthReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
const persistConfig = {
  key: "gamePanel",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialStoreState,
  middleware: () => [thunk],
});

setupListeners(store.dispatch);

export default store;
