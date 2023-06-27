import React, { useState, useEffect } from "react";
import { Container, CircularProgress } from "@mui/material";

const Preloader: React.FC<{}> = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease-in-out",
        visibility: visible ? "visible" : "hidden",
      }}
    >
      <CircularProgress />
    </Container>
  );
};

export default Preloader;
