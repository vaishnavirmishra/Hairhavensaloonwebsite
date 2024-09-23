import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon

export default function TemporaryDrawer1() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Menu items with paths for navigation
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Gallery", path: "/gallery" },
    { text: "Partner", path: "/partner" },
    { text: "Download", path: "/download" },
    { text: "Contact", path: "/contact" },
  ];

  // Drawer list with links
  const DrawerList = (
    <Box
      sx={{ width: 250, bgcolor: "black", height: "100vh", color: "white" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{ justifyContent: "center" }} // Center align the text
              component={Link} // Link for navigation
              to={item.path} // Path for navigation
            >
              <ListItemText
                primary={item.text}
                sx={{
                  textAlign: "center",
                  color: "#0EBDAA", // Apply #0EBDAA color to the text
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleDrawer(true)}
        sx={{
          backgroundColor: "white", // Black background
          color: "black", // White text
          "&:hover": {
            backgroundColor: "gray", // Optional: change color on hover
          },
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
