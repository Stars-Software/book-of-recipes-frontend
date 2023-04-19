import { Box, CssBaseline } from "@mui/material";
import React, { useEffect } from "react";
import { MenuAppBar } from "../common/components/menu-app-bar/menu-app-bar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { IProduct } from "../common/types/product.types";
import { ProductItem } from "./product-element";


export const ProductsList = () => {
  useEffect(() => {

  }, []);

  const products = useSelector((state: RootState) => state.products);

  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Box maxWidth='md'>
        {products.map((item: IProduct) => (
          <ProductItem key={item._id!} {...item} />
        ))}
      </Box>
    </>
  );
};
