import { createSlice } from "@reduxjs/toolkit";

type IState = {
  data: any[] | null;
  categories: any[] | null;
};

const initialState: IState = {
  data: null,
  categories: null,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes(state: IState, { payload }) {
      state.data = payload;
    },
    updateRecipe(state: IState, { payload }) {
    //   const { id } = payload;
    //   state.data = state.data!.map((item: any) => {
    //     if (item.id === id) {
    //       item = payload;
    //     }
    //     return item;
    //   });
    },
    deleteRecipe(state: IState, { payload }) {
      state.data = state.data!.filter((item: any) => {
        if (item.id !== payload) return item;
      });
    },
    setRecipeCategories(state: IState, { payload }) {
      state.categories = payload;
    },
  },
});

export default recipeSlice.reducer;
export const {
  setRecipes,
  updateRecipe,
  setRecipeCategories,
  deleteRecipe,
} = recipeSlice.actions;
