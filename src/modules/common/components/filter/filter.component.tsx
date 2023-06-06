import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

type Props<T> = {
  options: T[];
  value: string | undefined;
  onChange: (arg: string) => void;
};

const Filter: React.FC<Props<any>> = ({ options }) => {
  const getLabel = (option: any) => option.title;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      getOptionLabel={getLabel}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

export default Filter;
