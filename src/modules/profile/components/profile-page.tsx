import React from "react";
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
import { ProfileState } from "../../common/types/profile.types";
import MenuAppBar from "../../common/components/menu-app-bar/menu-app-bar";

const cardStyle = {
  maxWidth: 500,
  margin: "auto",
  marginTop: "4rem",
  overflowY: "auto",
};

const mediaStyle = {
  height: 140,
};

const titleStyle = {
  marginBottom: "2rem",
};

const dividerStyle = {
  margin: "2rem 0",
};

const settingsTitleStyle = {
  marginBottom: "1rem",
};

const logoutButtonStyle = {
  marginTop: "2rem",
};

const ProfilePage: React.FC<ProfileState> = React.memo(({ name, avatar }) => {
  const avatarImageUrl = `http://localhost:4200/user/images/${avatar.filename}`;

  return (
    <CssBaseline>
      <MenuAppBar />
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card variant="outlined" sx={cardStyle}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={mediaStyle}
              src={avatarImageUrl}
              alt="Profile Avatar"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h5" component="div" sx={titleStyle}>
              {name}
            </Typography>
            <Divider sx={dividerStyle} />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={settingsTitleStyle}
            >
              Settings
            </Typography>
            <ProfileSettings />
          </CardContent>
          <CardActions>
            <Button size="small" color="error" sx={logoutButtonStyle}>
              Log out
            </Button>
          </CardActions>
        </Card>
      </Container>
    </CssBaseline>
  );
});

export default ProfilePage;
