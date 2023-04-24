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
import { bindActionCreators } from "redux";
import { AppDispatch } from "../../redux/store/store";
import { ConnectedProps, connect } from "react-redux";
import { signUpProfile } from "../../redux/thunks/auth.thunks";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ signUpProfile }, dispatch),
  };
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Register: React.FC<PropsFromRedux> = ({ signUpProfile }) => {
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
    onSubmit: ({ name, email, password, avatar }) => {
      signUpProfile({ name, email, password, avatar });
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
              type="text"
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

export default connector(Register);
