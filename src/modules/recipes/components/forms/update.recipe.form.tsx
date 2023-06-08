import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import { Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateProductThunk } from "../../../../redux/thunks/products.thunks";
import { FormContainer } from "../../../common/components/form/form.container";
import Filter from "../../../common/components/filter/filter.component";
import { RootState } from "../../../../redux/store/store";

type Props = {
  id: string;
  categoryId: string;
  amount: number;
};

const UpdateProductForm: React.FC<Props> = React.memo(
  ({ id, categoryId, amount }) => {
    const { categories } = useSelector((state: RootState) => state.products);

    const dispatch = useDispatch<any>();

    const onSubmit = (values: any) => {
      dispatch(updateProductThunk(values));
    };

    const formik = useFormik({
      initialValues: {
        id,
        categoryId,
        amount,
      },
      onSubmit,
    });

    return (
      <FormContainer text="Update" Icon={LockOutlinedIcon}>
        <form onSubmit={formik.handleSubmit}>
          <Stack gap={2}>
            <TextField
              id="amount"
              name="amount"
              label="Change amount"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
            {/* <Filter
              options={categories!}
              value={formik.values.categoryId}
              handler={(id: string) => formik.setFieldValue("categoryId", id)}
            /> */}
            <button type="submit">Submit</button>
          </Stack>
        </form>
      </FormContainer>
    );
  }
);

export default UpdateProductForm;
