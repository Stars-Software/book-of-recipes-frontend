import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { MenuAppBar } from "../../common/components/menu-app-bar/menu-app-bar";
import { IProduct } from "../../common/types/product.types";
import { ProductItem } from "./product-element";

type IProps = {
  products: IProduct[];
};

export const ProductsList: React.FC<IProps> = ({ products }) => {
  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Box maxWidth="md">
        {products.map((item: IProduct) => (
          <ProductItem key={item._id!} {...item} />
        ))}
      </Box>
    </>
  );
};
