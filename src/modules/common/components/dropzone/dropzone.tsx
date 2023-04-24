import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useDropzone } from "react-dropzone";

interface IProps {
  id: string;
  label: string;
  onChange: (id: string, arg: any) => void;
}

export const DropZone: React.FC<IProps> = ({ onChange, label, id }) => {
  const onDrop = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    onChange(id, formData);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      <Divider>
        <Typography variant="h5">{label}</Typography>
      </Divider>
      <Box
        component="div"
        sx={{ p: 2, border: "1px dashed grey" }}
        {...getRootProps()}
      >
        <Box>
          <input type="file" {...getInputProps()} />
        </Box>
        <Typography variant="h5">
          {isDragActive
            ? "Release to drop the files here"
            : "Drag 'n' drop some files here, or click to select files"}
        </Typography>
      </Box>
    </>
  );
};
