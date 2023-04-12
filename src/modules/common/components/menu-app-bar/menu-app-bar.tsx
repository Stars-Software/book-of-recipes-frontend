import React from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

export const MenuAppBar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(state) => (
            <React.Fragment>
              <IconButton edge="start" {...bindTrigger(state)}>
                <MenuIcon />
              </IconButton>
              <Menu {...bindMenu(state)}>
                <MenuItem onClick={state.close}>Profile</MenuItem>
                <MenuItem onClick={state.close}>My account</MenuItem>
                <MenuItem onClick={state.close}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <MenuBookIcon />
        </Avatar>
        <Typography textAlign="center" variant="h6">
          Book of recipes
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
