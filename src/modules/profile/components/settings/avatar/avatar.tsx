import React from "react";
import { DropZone } from "../../../../common/components/dropzone/dropzone";
import { FormContainer } from "../../../../common/components/form/form.container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import {avatarInitialValues as initialValues} from "../../../../../modules/common/consts/initialValues.const"
export const ChangeAvatar = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      return console.log(values);
    },
  });

  return (
    <FormContainer text="" Icon={LockOutlinedIcon}>
      <form onSubmit={formik.handleSubmit}>
        <>
          <DropZone
            id="avatar"
            label="Browse a file"
            onChange={formik.setFieldValue}
          />
          <Button type="submit">Submit</Button>
        </>
      </form>
    </FormContainer>
  );
};
