import React, { useEffect } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../redux/store/store";
import AuthRedirect from "../auth/auth.container";
import {
  fetchRecipeCategories,
  fetchRecipes,
} from "../../redux/thunks/recipe.thunks";
import RecipesPage from "./components/recipes.page";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ fetchRecipeCategories, fetchRecipes }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProductsContainer: React.FC<PropsFromRedux> = ({
  fetchRecipeCategories,
  fetchRecipes,
}) => {
  const recipesState = useSelector((state: RootState) => state.recipes);
  const { loading } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    fetchRecipeCategories();
  }, [fetchRecipeCategories]);

  useEffect(() => {
    fetchRecipes("");
  }, [fetchRecipes]);

  return <RecipesPage {...{ ...recipesState, loading }} />;
};

export default connector(AuthRedirect(ProductsContainer));
