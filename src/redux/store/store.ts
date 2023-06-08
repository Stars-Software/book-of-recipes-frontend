import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../slices/profileSlice";
import productsSlice from "../slices/productsSlice";
import appSlice from "../slices/app.slice";
import recipeSlice from "../slices/recipe.slice";

const store = configureStore({
  reducer: {
    app: appSlice,
    profile: profileSlice,
    products: productsSlice,
    recipes: recipeSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
