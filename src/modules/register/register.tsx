import React from "react";
import { useFormik } from "formik";
import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormContainer } from "../common/components/form/form.container";

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAgree: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <FormContainer text="Sign Up" Icon={LockOutlinedIcon}>
        <form onSubmit={formik.handleSubmit}>
          <Stack sx={{ gap: 2, padding: 2 }}>
            <TextField
              id="name"
              name="name"
              type="name"
              label="Your name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Enter password again"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="isAgree"
                      name="isAgree"
                      onChange={formik.handleChange}
                      value={formik.values.isAgree}
                    />
                  }
                  label="I agree with policy of company"
                />
              </Grid>
              <Grid item>
                <NavLink to={"/"}>{"Policy of our company"}</NavLink>
              </Grid>
            </Grid>
            <Button disabled={!formik.values.isAgree} type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </FormContainer>
    </Container>
  );
};
