import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import ProductActions from "../actions/recipe.actions";

type Props = {
  id: string;
  title: string;
  amount: number;
  categoryId: string;
  product_categories: any;
  categories: any[];
};

export const ProductItem: React.FC<Props> = (props) => {
  const {
    id,
    title,
    amount,
    categoryId,
    product_categories,
    categories,
  } = props;
  return (
    <Card sx={{ minWidth: 345, margin: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={`http://localhost:4200/categories/${product_categories.image}`}
          alt="Here is the picture of product"
        />
      </CardActionArea>
      <CardContent>
        <Stack direction="column" spacing={2} margin={2}>
          <Divider />
          <Typography variant="h4" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Amount: <Chip label={amount} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: <Chip label={product_categories.title} />
          </Typography>
          <ProductActions
            id={id}
            categoryId={categoryId}
            amount={amount}
            categories={categories}
          />
        </Stack>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
