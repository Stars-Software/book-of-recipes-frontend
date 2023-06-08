import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../redux/store/store";
import AuthRedirect from "../auth/auth.container";
import Preloader from "../common/components/preloader/preloader";
import {
  fetchProductCategories,
  fetchProducts,
} from "../../redux/thunks/products.thunks";
import List from "../common/components/list/list";
import { ProductItem } from "./components/element/product-element.component";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    { fetchProductCategories, fetchProducts },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProductsContainer: React.FC<PropsFromRedux> = ({
  fetchProductCategories,
  fetchProducts,
}) => {
  const [filter, setFilter] = useState<string>("");
  const { data, categories } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    fetchProductCategories();
  }, [fetchProductCategories]);

  useEffect(() => {
    fetchProducts(filter);
  }, [fetchProducts, filter]);

  if (!data || !categories) {
    return <Preloader />;
  }

  return (
    <List
      Component={ProductItem}
      list={data}
      categories={categories}
      filter={filter}
      filterHandler={setFilter}
      navigation={ROUTER_KEYS.PRODUCTS}
    />
  );
};

export default connector(AuthRedirect(ProductsContainer));
