import { Box, CssBaseline, Grid } from "@mui/material";
import React from "react";
import { ProductItem } from "./element/product-element.component";
import { Product } from "../../common/types/product.types";
import MenuAppBar from "../../common/components/menu-app-bar/menu-app-bar";
import Filter from "../../common/components/filter/filter.component";

type IProps = {
  list: Product[];
  categories: any[];
  filter: string;
  filterHandler: (arg: string) => void;
};

export const ProductsList: React.FC<IProps> = React.memo((props) => {
  const { categories, list, filter, filterHandler } = props;

  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Filter options={categories} value={filter} handler={filterHandler} />
        <Box mt={4} maxWidth="md">
          <Grid container spacing={2}>
            {list.map((item: Product) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <ProductItem {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
});
