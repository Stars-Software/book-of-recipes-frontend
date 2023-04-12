import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../slices/profileSlice";
import productsSlice from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    profile: profileSlice,
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
