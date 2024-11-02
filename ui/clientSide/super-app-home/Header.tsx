"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Icon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@/app/context/themeContext";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#121212" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#ffffff" }}
        >
          MyApp
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "1rem",
          }}
        >
          <IconButton onClick={toggleTheme}>
            {isDarkMode ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon htmlColor="white" />
            )}
          </IconButton>
          <Button
            variant="contained"
            color="info"
            sx={{
              backgroundColor: "#123452",
              "&:hover": { backgroundColor: "#0f2742" },
            }}
          >
            About
          </Button>
          <Button
            variant="contained"
            color="info"
            sx={{
              backgroundColor: "#123452",
              "&:hover": { backgroundColor: "#0f2742" },
            }}
          >
            Contact
          </Button>
        </Box>

        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box
            sx={{ width: 250, backgroundColor: "#121212", color: "#ffffff" }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <IconButton onClick={toggleDrawer} sx={{ color: "#ffffff" }}>
              <CloseIcon />
            </IconButton>
            <List>
              <ListItem component="div">
                <ListItemText primary="Home" sx={{ color: "#ffffff" }} />
              </ListItem>
              <ListItem component="div">
                <ListItemText primary="About" sx={{ color: "#ffffff" }} />
              </ListItem>
              <ListItem component="div">
                <ListItemText primary="Contact" sx={{ color: "#ffffff" }} />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
