import React from "react";
import { MenuAppBar } from "../common/components/menu-app-bar/menu-app-bar";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Divider,
  Typography,
} from "@mui/material";
import { ProfileSettings } from "./settings/profile-settings";

export const Profile = () => {
  return (
    <>
      <CssBaseline />
      <MenuAppBar />
      <Container maxWidth="md">
        <Card variant="elevation" sx={{ width: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </CardActionArea>
          <CardContent>
            <Divider />
            <Typography gutterBottom variant="h5" component="div">
              Your name
            </Typography>
            <Divider>
              <Typography variant="h5" color="text.secondary">
                Settings
              </Typography>
            </Divider>
            <ProfileSettings />
          </CardContent>
          <CardActions>
            <Button size="small" color="error">
              Log out
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};
