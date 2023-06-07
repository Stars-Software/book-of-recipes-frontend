import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { UpdateProductForm } from "../forms/update.product.form";

const ProductActions = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <UpdateProductForm
            id={""}
            categoryId={""}
            amount={0}
            categories={[]}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductActions;
