import React from "react";
import Preloader from "../../common/components/preloader/preloader";
import List from "../../common/components/list/list";
import { RecipeItem } from "./element/recipe.element";
import { ROUTER_KEYS } from "../../common/consts/app-keys.const";

type Props = {
  categories: any[] | null;
  data: any[] | null;
  loading: number;
};

const RecipesPage: React.FC<Props> = ({ categories, data, loading }) => {

  if (!categories || !data || loading) {
    return <Preloader />;
  }

  return (
    <List
      Component={RecipeItem}
      list={data!}
      categories={categories!}
      navigation={ROUTER_KEYS.RECIPES_NEW}
    />
  );
};

export default RecipesPage;