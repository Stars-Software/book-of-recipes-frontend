import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import UpdateProductForm from "../forms/update.recipe.form";
import { useDispatch } from "react-redux";
import { deleteProductThunk } from "../../../../redux/thunks/products.thunks";

type Props = {
  id: string;
  categoryId: string;
  amount: number;
  categories: any[];
};

const ProductActions: React.FC<Props> = React.memo((props) => {
  const dispatch = useDispatch<any>();
  const onDelete = () => {
    dispatch(deleteProductThunk(props.id));
  };

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
          <UpdateProductForm {...props} />
          <Button onClick={onDelete}>Delete</Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
});

export default ProductActions;
