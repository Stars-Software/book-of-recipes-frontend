import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { MainRouter } from "../router/main-router";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <MainRouter />
  </ThemeProvider>
);

export default AppContainer;
