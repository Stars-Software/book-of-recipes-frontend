import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { ProductItem } from "./product-element.component";
import { Product } from "../../common/types/product.types";
import MenuAppBar from "../../common/components/menu-app-bar/menu-app-bar";
import Filter from "../../common/components/filter/filter.component";

type IProps = {
  list: Product[];
  categories: any[];
  filter: string | undefined;
  filterHandler: (arg: string) => void;
};

export const ProductsList: React.FC<IProps> = React.memo((props) => {
  const { categories, list, filter, filterHandler } = props;
  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Filter options={categories} value={filter} onChange={filterHandler} />
      <Box maxWidth="md">
        {list.map((item: Product) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </Box>
    </>
  );
});
