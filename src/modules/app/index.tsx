import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { MainRouter } from "../router/main-router";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <MainRouter />
    </Provider>
  </ThemeProvider>
);

export default AppContainer;
