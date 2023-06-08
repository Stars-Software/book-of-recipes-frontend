import React from "react";
import { CssBaseline, Box, Button, Grid, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuAppBar from "../menu-app-bar/menu-app-bar";
import Filter from "../filter/filter.component";

type IProps = {
  list: any[];
  categories: any[];
  filter: string;
  navigation: string;
  filterHandler: (arg: string) => void;
  Component: React.FC<any>;
};

export const List: React.FC<IProps> = React.memo((props) => {
  const {
    categories,
    list,
    filter,
    filterHandler,
    navigation,
    Component,
  } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigation);
  };
  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            minHeight: "50px",
          }}
        >
          <Filter options={categories} value={filter} handler={filterHandler} />
          <Button variant="contained" color="primary" onClick={handleClick}>
            New
          </Button>
        </Box>
      </Toolbar>
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
              <Component {...item} categories={categories} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
});

export default List;
