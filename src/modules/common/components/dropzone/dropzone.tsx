import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Accept, useDropzone } from "react-dropzone";

interface IProps {
  id: string;
  label: string;
  accept: Accept;
  onChange: (id: string, arg: any) => void;
}

export const DropZone: React.FC<IProps> = ({ onChange, accept, label, id }) => {
  const onDrop = (acceptedFile: any) => onChange(id, acceptedFile);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
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
          <input {...getInputProps()} />
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
