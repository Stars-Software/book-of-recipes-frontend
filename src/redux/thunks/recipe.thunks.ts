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
  "recipes/fetchRecipes",
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
  "recipes/createRecipe",
  async (values: any, { dispatch }) => {
    try {
      await recipeService.createRecipe(values);
    } catch (error) {
      dispatch(setError(error));
    }
  }
);

export const updateRecipeThunk = createAsyncThunk(
  "recipes/updateRecipe",
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
  "recipes/deleteRecipe",
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
  "recipes/fetchRecipeCategories",
  async (_, { dispatch }) => {
    try {
      const { data } = await recipeService.getCategories();
      dispatch(setRecipeCategories(data));
    } catch (error) {
      dispatch(setError(error));
    }
  }
);
