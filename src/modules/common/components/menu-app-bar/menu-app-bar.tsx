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
import { useNavigate } from "react-router-dom";
import { ROUTER_KEYS } from "../../consts/app-keys.const";

const MenuAppBar: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuItemClick = (route: string) => () => {
    navigate(route);
    handleClose();
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleMenuItemClick(ROUTER_KEYS.PRODUCTS)}>
            Products
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick(ROUTER_KEYS.REGISTER)}>
            Recipes
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick(ROUTER_KEYS.PROFILE)}>
            Profile
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick(ROUTER_KEYS.HOME)}>
            Logout
          </MenuItem>
        </Menu>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <MenuBookIcon />
        </Avatar>
        <Typography variant="h6" component="div">
          Book of recipes
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;
