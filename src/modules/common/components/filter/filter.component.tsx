import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

type Option = {
  id: string;
  title: string;
};

type Props<T extends Option> = {
  options: T[];
  value: string;
  handler: (arg: string) => void;
};

const Filter = <T extends Option>({ options, value, handler }: Props<T>) => {
  const getLabel = (option: T) => option.title;

  const onChange = (_event: React.ChangeEvent<{}>, value: T | null) => {
    if (!value) {
      handler("");
    } else {
      handler(value.id);
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={onChange}
      options={options}
      value={options.find((option) => option.id === value) || null}
      getOptionLabel={getLabel}
      sx={{ maxWidth: 250 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

export default Filter;
