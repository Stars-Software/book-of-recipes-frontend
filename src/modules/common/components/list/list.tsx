import React, { useState } from "react";
import { CssBaseline, Box, Button, Grid, Toolbar, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuAppBar from "../menu-app-bar/menu-app-bar";
import Filter from "../filter/filter.component";

type Props<T> = {
  data: T[];
};

type IProps = {
  list: any[];
  categories: any[];
  navigation: string;
  Component: React.FC<any>;
};

export const List: React.FC<IProps> = React.memo((props) => {
  const { categories, list, navigation, Component } = props;

  const navigate = useNavigate();

  const [filterCategoryId, setFilterCategoryId] = useState<string>(""); // category id

  const handleFilter = (data: any[]) => {
    if (!filterCategoryId) return data
    return data.filter((item: any) => item.categoryId === filterCategoryId);
  };

  const renderComponents = (data: any[]) => {
    const filteredData = handleFilter(data);

    return filteredData.map((item: any) => (
      <Grid item xs={12} sm={6} md={4} key={item.id}>
        <Component {...item} categories={categories} />
      </Grid>
    ));
  };

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
            mt:2
          }}
        >
          <Filter options={categories} value={filterCategoryId} handler={setFilterCategoryId} />
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
          {renderComponents(list)}
        </Grid>
      </Box>
    </>
  );
});

export default List;
