import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

type Option = {
  id: string;
  title: string;
};

type Props<T extends Option> = {
  options: T[];
  value: string;
  handler: (arg: any) => void;
};

const Filter = <T extends Option>(props: Props<T>) => {
  const { options, handler, value } = props;

  const handleChange = (event: any) => {
    handler(event.target.value)
  }

  return (
    <FormControl fullWidth sx={{maxWidth: 300}}>
      <InputLabel id="category-label">Category</InputLabel>
      <Select value={value} labelId="category-label" onChange={handleChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((c) => (
          <MenuItem value={c.id}>{c.title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
