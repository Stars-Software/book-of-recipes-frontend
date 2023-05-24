import { useFormik } from "formik";
import React from "react";

const ProductForm = () => {
  const onSubmit = () => {};

  const formik = useFormik({
    initialValues: {
      title: "",
      amount: "",
      categoryId: "",
    },
    onSubmit,
  });

  return;
};
