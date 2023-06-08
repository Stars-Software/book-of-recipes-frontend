import { Box, Button, CssBaseline, Grid } from "@mui/material";
import React from "react";
import { ProductItem } from "./element/product-element.component";
import { Product } from "../../common/types/product.types";
import MenuAppBar from "../../common/components/menu-app-bar/menu-app-bar";
import Filter from "../../common/components/filter/filter.component";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../../common/consts/app-keys.const";

type IProps = {
  list: Product[];
  categories: any[];
  filter: string;
  filterHandler: (arg: string) => void;
};

export const ProductsList: React.FC<IProps> = React.memo((props) => {
  const { categories, list, filter, filterHandler } = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(ROUTER_KEYS.PRODUCTS_NEW);
  };

  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Filter options={categories} value={filter} handler={filterHandler} />
      <Button variant="contained" color="primary" onClick={onClick}>
        New
      </Button>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto",
        }}
      >
        <Grid container spacing={3}>
          {list.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <ProductItem {...item} categories={categories} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
});
