import React from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../redux/store/store";
import { ConnectedProps, connect, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchRecipeCategories,
  fetchRecipes,
} from "../../redux/thunks/recipe.thunks";
import Preloader from "../common/components/preloader/preloader";
import AuthRedirect from "../auth/auth.container";
import { RecipeList } from "./components/recipes.page";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ fetchRecipes, fetchRecipeCategories }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const RecipeContainer: React.FC<PropsFromRedux> = ({
  fetchRecipeCategories,
  fetchRecipes,
}) => {
  const [filter, setFilter] = useState<string>("");
  const { data, categories } = useSelector((state: RootState) => state.recipes);

  useEffect(() => {
    fetchRecipeCategories();
  }, [fetchRecipeCategories]);

  useEffect(() => {
    fetchRecipes(filter);
  }, [fetchRecipes, filter]);
 
  return (
    <RecipeList
      filter={filter}
      filterHandler={setFilter}
    />
  );
};

export default connector(AuthRedirect(RecipeContainer));
