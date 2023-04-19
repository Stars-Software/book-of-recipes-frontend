import React, { ChangeEvent, useState } from "react";
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
import { DropZone } from "../common/components/dropzone/dropzone";

export const Register = () => {
  const [isAgree, setIsAgree] = useState(false);

  const checkBoxHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setIsAgree(e.target.checked);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatar: null,
      confirmPassword: "",
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
            <DropZone
              id="avatar"
              label="Upload your avatar"
              accept={{ type: ["image/*"] }}
              onChange={formik.setFieldValue}
            />
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="isAgree"
                      name="isAgree"
                      onChange={checkBoxHandler}
                      value={isAgree}
                    />
                  }
                  label="I agree with policy of company"
                />
              </Grid>
              <Grid item>
                <NavLink to={"/"}>{"Policy of our company"}</NavLink>
              </Grid>
            </Grid>
            <Button disabled={!isAgree} type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </FormContainer>
    </Container>
  );
};
