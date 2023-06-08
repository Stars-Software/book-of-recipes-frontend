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
import { FormContainer } from "../../common/components/form/form.container";
import { DropZone } from "../../common/components/dropzone/dropzone";
import { signUpSchema } from "../../../validation/user.schemas";
import {registerInitialValues as initialValues} from "../../../modules/common/consts/initialValues.const"

type FormValues = {
  name: string;
  email: string;
  password: string;
  avatar: FormData | null;
};

type Props = {
  signUpProfile: any;
};

const RegisterForm: React.FC<Props> = ({ signUpProfile }) => {
  const validationSchema = signUpSchema;

  const [isAgree, setIsAgree] = useState(false);

  const checkBoxHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setIsAgree(e.target.checked);

  const onSubmit = (values: FormValues) => {
    signUpProfile(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
              type="text"
              label="Your name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <DropZone
              id="avatar"
              label="Upload your avatar"
              onChange={formik.setFieldValue}
              error={formik.touched.avatar && Boolean(formik.errors.avatar)}
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

export default RegisterForm;
