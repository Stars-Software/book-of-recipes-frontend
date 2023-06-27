import React from "react";
import Preloader from "../../common/components/preloader/preloader";
import List from "../../common/components/list/list";
import { ProductItem } from "./element/product-element.component";
import { ROUTER_KEYS } from "../../common/consts/app-keys.const";

type Props = {
  data: any[] | null;
  categories: any[] | null;
  loading: number;
};

const ProductsPage: React.FC<Props> = ({ data, categories, loading }) => {
  if (!data || !categories || loading) {
    return <Preloader />;
  }

  return (
    <List
      Component={ProductItem}
      list={data}
      categories={categories}
      navigation={ROUTER_KEYS.PRODUCTS_NEW}
    />
  );
};

export default ProductsPage;
