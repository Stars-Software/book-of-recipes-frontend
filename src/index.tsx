import React from "react";
import AppContainer from "./modules/app";
import * as ReactDOMClient from "react-dom/client";
import { CssBaseline } from "@mui/material";
const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container!);

root.render(
  <>
    <CssBaseline />
    <AppContainer />
  </>
);
