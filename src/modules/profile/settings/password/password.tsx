import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormContainer } from "../../../common/components/form/form.container";
import { useFormik } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";

export const ChangePasswordForm = () => {
  const [hidden, setHidden] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormContainer text="Change password" Icon={LockOutlinedIcon}>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={2}>
          <TextField
            id="password"
            name="password"
            label="Password"
            type={hidden ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type={hidden ? "text" : "password"}
            label="Confirm password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setHidden(e.target.checked)}
                value={hidden}
              />
            }
            label="Show password"
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </FormContainer>
  );
};
