import { Box, Button, CssBaseline, Grid } from "@mui/material";
import React from "react";
import { RecipeItem } from "./element/recipe.element";
import MenuAppBar from "../../common/components/menu-app-bar/menu-app-bar";
import Filter from "../../common/components/filter/filter.component";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../../common/consts/app-keys.const";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import Preloader from "../../common/components/preloader/preloader";

type IProps = {
  filter: string;
  filterHandler: (arg: string) => void;
};

export const RecipeList: React.FC<IProps> = React.memo((props) => {
  const { filter, filterHandler } = props;
  const { data, categories } = useSelector((state: RootState) => state.recipes);
  const navigate = useNavigate();

  const onClick = () => {
    navigate(ROUTER_KEYS.RECIPES_NEW);
  };

  if (!data || !categories) return <Preloader />;

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
          {data.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <RecipeItem {...item} categories={categories} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
});
