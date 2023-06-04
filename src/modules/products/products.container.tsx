import React, { useCallback, useEffect } from "react";
import { ConnectedProps, connect, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import AuthRedirect from "../auth/auth.container";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ProductsList } from "./page/products.page.component";
import Preloader from "../common/components/preloader/preloader";
import { fetchProductCategories } from "../../redux/thunks/products.thunks";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    ...bindActionCreators({ fetchProductCategories }, dispatch),
  };
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProductsContainer: React.FC<PropsFromRedux> = ({
  fetchProductCategories,
}) => {

  const memoizedFetchCategories = useCallback(() => {
    fetchProductCategories();
  }, [fetchProductCategories]);

  useEffect(() => {
    memoizedFetchCategories();
  }, []);

  const { loading } = useSelector((state: RootState) => state.app);
  const { data, categories } = useSelector(
    (state: RootState) => state.products
  );

  if (loading && !data && !categories) {
    return <Preloader />;
  }

  return <ProductsList list={data!} categories={categories!} />;
};

export default connector(AuthRedirect(ProductsContainer));
