import { useFormik } from "formik";
import React, { useEffect } from "react";
import {
  Stack,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Container, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../../../common/consts/app-keys.const";
import Preloader from "../../../common/components/preloader/preloader";
import {
  fetchProducts,
} from "../../../../redux/thunks/products.thunks";
import { createRecipeThunk, fetchRecipeCategories } from "../../../../redux/thunks/recipe.thunks";
import { RootState } from "../../../../redux/store/store";
import { FormContainer } from "../../../common/components/form/form.container";
import Filter from "../../../common/components/filter/filter.component";

type RecipeProduct = {
  id: string;
  amount: number;
};

type InitialState = {
  title: string;
  description: string;
  private: boolean;
  categoryId: string;
  products: RecipeProduct[];
};

const initialValues: InitialState = {
  title: "",
  description: "",
  private: false,
  categoryId: "",
  products: [],
};

const CreateRecipeForm: React.FC<{}> = () => {
  const { categories } = useSelector((state: RootState) => state.recipes);
  const { data } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (!categories) {
      dispatch(fetchRecipeCategories());
    }
    if (!data) {
      dispatch(fetchProducts(""));
    }
  }, [categories, data, dispatch]);

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch(createRecipeThunk(values));
    navigate(ROUTER_KEYS.RECIPES);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  if (!categories || !data) return <Preloader />;

  const handleAddProduct = () => {
    formik.setValues({
      ...formik.values,
      products: [...formik.values.products, { id: "", amount: 0 }],
    });
  };

  const handleRemoveProduct = (index: number) => {
    formik.setValues({
      ...formik.values,
      products: formik.values.products.filter((_, i) => i !== index),
    });
  };

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
      <FormContainer text="Create Recipe" Icon={LockOutlinedIcon}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              id="title"
              label="Write title"
              type="text"
              variant="outlined"
              {...formik.getFieldProps("title")}
            />
            <TextField
              id="description"
              label="Description"
              type="text"
              variant="outlined"
              {...formik.getFieldProps("description")}
            />
            <FormControlLabel
              control={
                <Switch
                  id="private"
                  checked={formik.values.private}
                  {...formik.getFieldProps("private")}
                />
              }
              label="Private"
            />
            <Filter
              options={categories}
              value={formik.values.categoryId}
              handler={(id) => formik.setFieldValue("categoryId", id)}
            />
            <Divider />
            {formik.values.products.map((product, index) => (
              <div key={index}>
                <Filter
                  label="Product"
                  options={data}
                  name={`products[${index}].id`}
                  value={product.id}
                  handler={(id) =>
                    formik.setFieldValue(`products[${index}].id`, id)
                  }
                />
                <TextField
                  label="Amount"
                  type="number"
                  name={`products[${index}].amount`}
                  value={product.amount}
                  onChange={formik.handleChange}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRemoveProduct(index)}
                >
                  Remove Product
                </Button>
                <br />
              </div>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
            <Divider />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Stack>
        </form>
      </FormContainer>
    </Container>
  );
};

export default CreateRecipeForm;
