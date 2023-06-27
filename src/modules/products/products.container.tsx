import React, { useEffect } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../redux/store/store";
import AuthRedirect from "../auth/auth.container";
import {
  fetchProductCategories,
  fetchProducts,
} from "../../redux/thunks/products.thunks";
import ProductsPage from "./components/products.page";

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
  const productState = useSelector((state: RootState) => state.products);
  const { loading } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    fetchProductCategories();
  }, [fetchProductCategories]);

  useEffect(() => {
    fetchProducts("");
  }, [fetchProducts]);

  return <ProductsPage {...{ ...productState, loading }} />;
};

export default connector(AuthRedirect(ProductsContainer));
