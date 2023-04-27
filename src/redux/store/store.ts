import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../slices/profileSlice";
import productsSlice from "../slices/productsSlice";
import authSlice from "../slices/auth.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
    products: productsSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
