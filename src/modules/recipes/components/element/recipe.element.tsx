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
import RecipeActions from "../actions/recipe.actions";

type Props = {
  id: string;
  title: string;
  description: string;
  products: any[];
  categoryId: string;
  userId: string;
  recipe_category: {
    title: string;
    id: string;
  };
};

export const RecipeItem: React.FC<Props> = (props) => {
  const {
    id,
    title,
    userId,
    description,
    categoryId,
    products,
    recipe_category,
  } = props;

  const renderedComponents = (data: any[]) => {
    console.log(data)
    return data.map((item: any) => (
      <Chip label={`${item.title} : ${item.recipe_products.amount}`} />
    ));
  };

  return (
    <Card sx={{ minWidth: 345, margin: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={`https://source.unsplash.com/random`}
          alt="Here is the picture of recipe"
        />
      </CardActionArea>
      <CardContent>
        <Stack direction="column" spacing={2} margin={2}>
          <Divider>
            <Typography variant="h4" component="div" gutterBottom>
              {title}
            </Typography>
          </Divider>
          <Typography variant="body2" color="text.secondary">
            Amount: <Chip label={description} />
          </Typography>
          <Divider>
            <Typography variant="body2" color="text.secondary">
              {renderedComponents(products)}
            </Typography>
          </Divider>
          <Typography variant="body2" color="text.secondary">
            Category: <Chip label={recipe_category.title} />
          </Typography>
          <RecipeActions
            id={id}
            description={description}
            title={title}
            userId={userId}
            products={products}
          />
        </Stack>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
