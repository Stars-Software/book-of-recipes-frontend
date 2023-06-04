import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Alert } from "@mui/material";

const SnackBar = () => {
  const { error } = useSelector((state: RootState) => state.app);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (error) {
      setMessage(error.message);
      setOpen(true);
    }
  }, [error]);

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage("");
    setOpen(false);
  };

  return (
    <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    action={
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    }
  >
    <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
      {message}
    </Alert>
  </Snackbar>
  );
};

export default SnackBar;
