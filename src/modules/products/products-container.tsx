import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import AuthRedirect from "../auth/auth.container";
import { compose } from "@reduxjs/toolkit";
import { ProductsList } from "./page/products";

const ProductsContainer = () => {
  useEffect(() => {}, []);
  const products = useSelector((state: RootState) => state.products);
  return <ProductsList products={products} />;
};

export default compose(AuthRedirect)(ProductsContainer);
