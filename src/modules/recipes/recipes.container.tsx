import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../redux/store/store";
import AuthRedirect from "../auth/auth.container";
import Preloader from "../common/components/preloader/preloader";
import List from "../common/components/list/list";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import { RecipeItem } from "./components/element/recipe.element";
import {
  fetchRecipeCategories,
  fetchRecipes,
} from "../../redux/thunks/recipe.thunks";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ fetchRecipeCategories, fetchRecipes }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProductsContainer: React.FC<PropsFromRedux> = ({
  fetchRecipeCategories,
  fetchRecipes,
}) => {

  const { data, categories } = useSelector((state: RootState) => state.recipes);

  useEffect(() => {
    fetchRecipeCategories();
  }, [fetchRecipeCategories]);

  useEffect(() => {
    fetchRecipes('');
  }, [fetchRecipes]);


  if (!data || !categories) {
    return <Preloader />;
  }

  return (
    <List
      Component={RecipeItem}
      list={data}
      categories={categories}
      navigation={ROUTER_KEYS.RECIPES_NEW}
    />
  );
};

export default connector(AuthRedirect(ProductsContainer));
