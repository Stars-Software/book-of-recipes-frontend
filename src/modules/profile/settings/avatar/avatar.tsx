import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { DropZone } from "../../../common/components/dropzone/dropzone";
import { FormContainer } from "../../../common/components/form/form.container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";

export const ChangeAvatar = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);

  const formik = useFormik({
    initialValues: {
      avatar: null,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormContainer text="" Icon={LockOutlinedIcon}>
      <form onSubmit={formik.handleSubmit}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value={0} label="Add URL" />
          <Tab value={1} label="Add File" />
        </Tabs>
        {value ? (
          <>
            <Divider>
              <Typography variant="h5">Browse a file</Typography>
            </Divider>
            <DropZone accept={{ type: ["image/*"] }} onDrop={onDrop} />
          </>
        ) : (
          <Divider>
            <Typography variant="h5">URL</Typography>
          </Divider>
        )}
      </form>
    </FormContainer>
  );
};
