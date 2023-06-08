import { useFormik } from "formik";
import React, { useEffect } from "react";
import { TextField, Button, Divider } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Container, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../../../common/consts/app-keys.const";
import Preloader from "../../../common/components/preloader/preloader";
import { fetchProducts } from "../../../../redux/thunks/products.thunks";
import { updateRecipeThunk } from "../../../../redux/thunks/recipe.thunks";
import { RootState } from "../../../../redux/store/store";
import { FormContainer } from "../../../common/components/form/form.container";
import Filter from "../../../common/components/filter/filter.component";

type Props = {
  id: string;
  products: any[];
  title: string;
  description: string;
};

const UpdateRecipeForm: React.FC<Props> = (props) => {
  const { id, products, title, description } = props;

  const { data } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (!data) dispatch(fetchProducts(""));
  }, []);

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch(updateRecipeThunk({ ...values, id }));
    navigate(ROUTER_KEYS.RECIPES);
  };

  const formik = useFormik({
    initialValues: { products, title, description },
    onSubmit,
  });

  if (!data) return <Preloader />;

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
          {formik.values.products.map((product, index) => (
            <div key={index}>
              <Filter
                options={data}
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
        </form>
      </FormContainer>
    </Container>
  );
};

export default UpdateRecipeForm;
