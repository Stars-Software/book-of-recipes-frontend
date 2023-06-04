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
import { Product, ProductCategory } from "../../common/types/product.types";

export const ProductItem: React.FC<Product> = (props) => {
  const { id, title, amount, category_id } = props;
  const category = {};

  return (
    <Card sx={{ minWidth: 345, margin: 3 }}>
      <CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={""}
            alt="Here is the picture of product"
          />
        </CardActionArea>
        <Stack direction="column" gap={2} margin={2}>
          <Divider>
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
          </Divider>
          <Typography variant="body2" color="text.secondary">
            Amount: <Chip label={amount} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {<Chip label={title} />}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
