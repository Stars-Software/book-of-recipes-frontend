import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import AuthRedirect from "../auth/auth.container";
import { compose } from "@reduxjs/toolkit";
import { ProductsList } from "./page/products";
import { Typography } from "@mui/material";
import Preloader from "../common/components/preloader/preloader";

const ProductsContainer = () => {
  useEffect(() => {}, []);
  const { data, error, loading } = useSelector(
    (state: RootState) => state.products
  );

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (loading) {
    return <Preloader />;
  }

  return <ProductsList list={data!} />;
};

export default compose(AuthRedirect)(ProductsContainer);
