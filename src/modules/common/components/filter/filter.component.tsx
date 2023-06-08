import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

type Option = {
  id: string;
  title: string;
};

type Props<T extends Option> = {
  id?: string;
  name?: string;
  label?: string;
  options: T[];
  value: string;
  handler: (arg: string) => void;
};

const Filter = <T extends Option>(props: Props<T>) => {
  const { handler, options, value, label, ...ids } = props;
  const getLabel = (option: T) => option.title;

  const onChange = (_event: React.ChangeEvent<{}>, value: T | null) => {
    if (!value) return handler("");
    return handler(value.id);
  };

  return (
    <Autocomplete
      {...ids}
      disablePortal
      onChange={onChange}
      options={options}
      value={options.find((option) => option.id === value) || null}
      getOptionLabel={getLabel}
      sx={{ maxWidth: 250 }}
      renderInput={(params) => (
        <TextField {...params} label={label ? label : ""} />
      )}
    />
  );
};

export default Filter;
