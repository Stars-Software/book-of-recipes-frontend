import { Box, Chip, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

interface IProps {
  id: string;
  label: string;
  onChange: (id: string, arg: any) => void;
  error?: boolean;
}

export const DropZone: React.FC<IProps> = ({ onChange, label, id, error }) => {
  const formData = new FormData();

  const [uploaded, setUploaded] = useState<string>("");

  const onDrop = ([file]: any) => {
    formData.append("file", file);
    setUploaded(file.name);
    onChange(id, formData);
  };

  const onDelete = () => {
    formData.delete("file");
    setUploaded("");
    onChange(id, formData);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const boxBorderColor = error ? "red" : uploaded ? "green" : "grey";

  return (
    <>
      <Divider>
        <Typography variant="h5">{label}</Typography>
      </Divider>
      <Box
        component="div"
        sx={{ p: 2, border: `1px dashed ${boxBorderColor}` }}
        {...getRootProps()}
      >
        <Box>
          {!uploaded ? (
            <>
              <input type="file" {...getInputProps()} />
              <Typography variant="h5">
                {isDragActive
                  ? "Release to drop the files here"
                  : "Drag 'n' drop some files here, or click to select files"}
              </Typography>
            </>
          ) : (
            <Chip onDelete={onDelete} label={uploaded} />
          )}
        </Box>
      </Box>
    </>
  );
};
