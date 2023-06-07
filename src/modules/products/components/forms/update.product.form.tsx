import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import { Button, Stack, TextField } from "@mui/material";
import { FormContainer } from "../../../common/components/form/form.container";
import Filter from "../../../common/components/filter/filter.component";

type Props = {
  id: string;
  categoryId: string;
  amount: number;
  categories: any[];
};

export const UpdateProductForm: React.FC<Props> = (props) => {
  const { id, categoryId, amount, categories } = props;

  const onSubmit = (values: any) => {};

  const formik = useFormik({
    initialValues: {
      categoryId,
      amount,
    },
    onSubmit,
  });

  return (
    <FormContainer text="Change password" Icon={LockOutlinedIcon}>
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
          <Filter
            options={categories}
            value={formik.values.categoryId}
            handler={formik.handleChange}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </FormContainer>
  );
};
