import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import ProfileSettings from "./actions/profile.actions";

type Props = {
  name: string;
  avatar: {
    filename: string;
  };
};

const ProfileCard: React.FC<Props> = ({ name, avatar }) => {
  const avatarImageUrl = `http://localhost:4200/user/images/${avatar.filename}`;

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 500,
          margin: "auto",
          marginTop: "4rem",
          overflowY: "auto",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              height: 140,
            }}
            src={avatarImageUrl}
            alt="Profile Avatar"
          />
        </CardActionArea>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              marginBottom: "2rem",
            }}
          >
            {name}
          </Typography>
          <Divider
            sx={{
              margin: "2rem 0",
            }}
          />
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              marginBottom: "1rem",
            }}
          >
            Settings
          </Typography>
          <ProfileSettings />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="error"
            sx={{
              marginTop: "2rem",
            }}
          >
            Log out
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProfileCard;
