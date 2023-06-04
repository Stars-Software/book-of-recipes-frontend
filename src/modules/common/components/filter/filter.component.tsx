import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ProductCategory } from "../../types/product.types";

type Props<T> = {
  options: T[];
};

const Filter: React.FC<Props<ProductCategory>> = ({ options }) => {
  const getLabel = (option: ProductCategory) => option.title;
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
