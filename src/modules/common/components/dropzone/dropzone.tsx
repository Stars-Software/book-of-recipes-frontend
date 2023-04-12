import { Box, Typography } from "@mui/material";
import React from "react";
import { Accept, useDropzone } from "react-dropzone";

interface IProps {
  onDrop: (arg: any) => void;
  accept: Accept;
}

export const DropZone: React.FC<IProps> = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  return (
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
  );
};
