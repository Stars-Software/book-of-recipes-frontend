import { Avatar, Box, CssBaseline, Paper, Typography } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  Icon: React.FC;
  children: JSX.Element | JSX.Element[];
}

export const FormContainer: React.FC<Props> = ({ text, Icon, children }) => {
  return (
    <Box
      sx={{
        my: 8,
        mx: "auto",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        maxWidth: 400,
      }}
      component={Paper}
      elevation={3}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <Icon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {text}
      </Typography>
      {children}
    </Box>
  );
};
