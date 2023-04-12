import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { MenuAppBar } from "../common/components/menu-app-bar/menu-app-bar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { IProduct } from "../common/types/product.types";
import { ProductItem } from "./product-element";

export const ProductsList = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Box>
        {products.map((item: IProduct) => (
          <ProductItem key={item._id!} {...item} />
        ))}
      </Box>
    </>
  );
};
