import React from "react";
import { useFormik } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import { ROUTER_KEYS } from "../common/consts/app-keys.const";
import { FormContainer } from "../common/components/form/form.container";

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormContainer text="Sign In" Icon={LockOutlinedIcon}>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={2}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
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
          <Grid container>
            <Grid item xs>
              <FormControlLabel
                control={
                  <Checkbox
                    id="rememberMe"
                    name="rememberMe"
                    value={formik.values.rememberMe}
                  />
                }
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <NavLink to={ROUTER_KEYS.REGISTER}>
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </FormContainer>
  );
};
