import React from "react";
import { useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import { ROUTER_KEYS } from "../../common/consts/app-keys.const";
import { FormContainer } from "../../common/components/form/form.container";
import { SignIn } from "../../common/types/auth.types";
import { signInSchema } from "../../../validation/user.schemas";
import {loginInitialValues as initialValues} from "../../../modules/common/consts/initialValues.const"

type IProps = {
  signInProfile: (value: SignIn) => void;
};

const LoginForm: React.FC<IProps> = ({ signInProfile }) => {
  const validationSchema = signInSchema;

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      signInProfile(values);
    },
    validationSchema,
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
            autoComplete="email"
          />
          <TextField
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            label="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Grid container>
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

export default LoginForm;
