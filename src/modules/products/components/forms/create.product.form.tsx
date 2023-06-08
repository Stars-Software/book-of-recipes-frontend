import { useFormik } from "formik";
import React from "react";
import { FormContainer } from "../../../common/components/form/form.container";
import {
  Stack,
  TextField,
  Button,
  CssBaseline,
  Container,
} from "@mui/material";
import Filter from "../../../common/components/filter/filter.component";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ConnectedProps, connect, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store/store";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../../../common/consts/app-keys.const";
import { createProductThunk } from "../../../../redux/thunks/products.thunks";
import Preloader from "../../../common/components/preloader/preloader";
import AuthRedirect from "../../../auth/auth.container";
import { bindActionCreators } from "@reduxjs/toolkit";
import {productInitialValues as initialValues} from "../../../../modules/common/consts/initialValues.const"
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({ createProductThunk }, dispatch);
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CreateProductForm: React.FC<PropsFromRedux> = ({
  createProductThunk,
}) => {
  const { categories } = useSelector((state: RootState) => state.products);
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    createProductThunk(values);
    navigate(ROUTER_KEYS.PRODUCTS);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  if (!categories) return <Preloader />;

  return (
    <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "50px", 
    }}
  >
    <CssBaseline />
    <FormContainer text="Change password" Icon={LockOutlinedIcon}>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="title"
            name="title"
            label="Write title"
            type="text"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <TextField
            id="amount"
            name="amount"
            label="Change amount"
            type="text"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.amount}
          />
          <Filter
            options={categories}
            value={formik.values.categoryId}
            handler={(id) => formik.setFieldValue("categoryId", id)}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
    </FormContainer>
  </Container>
  );
};

export default connector(AuthRedirect(CreateProductForm));
