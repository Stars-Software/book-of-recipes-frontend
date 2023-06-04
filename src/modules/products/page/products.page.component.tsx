import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { ProductItem } from "./product-element.component";
import { Product, ProductCategory } from "../../common/types/product.types";
import MenuAppBar from "../../common/components/menu-app-bar/menu-app-bar";

type IProps = {
  list: Product[];
  categories: ProductCategory[];
};

export const ProductsList: React.FC<IProps> = React.memo(
  ({ list, categories }) => {
    return (
      <>
        <CssBaseline />
        <MenuAppBar />
        <Box maxWidth="md">
          {list.map((item: Product) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </Box>
      </>
    );
  }
);
