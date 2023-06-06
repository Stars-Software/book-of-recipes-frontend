import React, { useCallback, useEffect, useState } from "react";
import { ConnectedProps, connect, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../redux/store/store";
import AuthRedirect from "../auth/auth.container";
import { ProductsList } from "./page/products.page.component";
import Preloader from "../common/components/preloader/preloader";
import {
  fetchProductCategories,
  fetchProducts,
} from "../../redux/thunks/products.thunks";

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
  const { loading } = useSelector((state: RootState) => state.app);

  const memoizedFetchCategories = useCallback(() => {
    fetchProductCategories();
  }, [fetchProductCategories]);

  const memoizedFetchProducts = useCallback(() => {
    fetchProducts(filter);
  }, [fetchProducts, filter]);

  useEffect(() => {
    memoizedFetchCategories();
    memoizedFetchProducts();
  }, [memoizedFetchCategories, memoizedFetchProducts]);

  if (loading || !data || !categories) {
    return <Preloader />;
  }

  return (
    <ProductsList
      list={data}
      categories={categories}
      filter={filter}
      filterHandler={setFilter}
    />
  );
};

export default connector(AuthRedirect(ProductsContainer));
