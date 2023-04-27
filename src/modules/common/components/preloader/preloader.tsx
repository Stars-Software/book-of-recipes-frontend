import { CircularProgress, Container } from "@mui/material";
import React from "react";

const Preloader = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Preloader;
