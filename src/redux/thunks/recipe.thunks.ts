import { createAsyncThunk } from "@reduxjs/toolkit";
import { recipeService } from "../../services/http-service/recipe.service";
import { setError } from "../slices/app.slice";
import {
  deleteRecipe,
  setRecipeCategories,
  setRecipes,
  updateRecipe,
} from "../slices/recipe.slice";

export const fetchRecipes = createAsyncThunk(
  "Recipes/fetchRecipes",
  async (categoryId: string, { dispatch }) => {
    try {
      const { data } = await recipeService.getAll(categoryId);
      dispatch(setRecipes(data));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const createRecipeThunk = createAsyncThunk(
  "Recipes/createRecipe",
  async (values: any, { dispatch }) => {
    try {
      await recipeService.createRecipe(values);
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const updateRecipeThunk = createAsyncThunk(
  "Recipes/updateRecipe",
  async (values: any, { dispatch }) => {
    try {
      const { data } = await recipeService.updateRecipe(values);
      dispatch(updateRecipe(data));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const deleteRecipeThunk = createAsyncThunk(
  "Recipes/deleRecipe",
  async (id: string, { dispatch }) => {
    try {
      await recipeService.deleteRecipe(id);
      dispatch(deleteRecipe(id));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const fetchRecipeCategories = createAsyncThunk(
  "Recipes/fetchRecipeCategories",
  async (_, { dispatch }) => {
    try {
      const { data } = await recipeService.getCategories();
      dispatch(setRecipeCategories(data));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);
