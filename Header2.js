import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import BasicModal12 from "./Modal2";
import TemporaryDrawer2 from "./Drawer2";

const Header2 = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const navigate = useNavigate();
  function goToContactpage() {
    navigate("/contact");
  }
  const navigate1 = useNavigate();
  function goToAboutpage() {
    navigate1("/aboutpage");
  }
  const navigate2 = useNavigate();
  function goToOurpartners1() {
    navigate2("/partners");
  }
  const navigate3 = useNavigate();
  function goToGallerypage() {
    navigate3("/gallery");
  }
  const navigate4 = useNavigate();
  function goToMain() {
    navigate4("/");
  }
  const DrawerList = (
    <Box
      sx={{
        width: 500,
        height: "150vh", // Full height
        bgcolor: "black", // Background color black
        color: "white", // Text color white
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Home", path: "/" },
          { text: "About Us", path: "/aboutpage" },
          { text: "Gallery", path: "/gallery" },
          { text: "Partners", path: "/partners" },
          { text: "Download", path: "/download" },
          { text: "Contact", path: "/contact" },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={path}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <div className="flex  mt-6">
      <div className="flex gap-11 ">
        <div className="mx-3 p-5 flex lg:hidden">
          {" "}
          <p className="font-bold  text-black">HairHaven</p>
          <img
            src="entypo_scissors.png"
            alt=""
            className=" rounded-full size-6 mx-1 bg-[#005E54] "
          />
        </div>
        <div className="block mx-6  lg:hidden  mt-3">
          <TemporaryDrawer2 />
        </div>
      </div>
      <div className="flex lg:mx-36">
        <p className=" hidden lg:block lg:mx-0 mx-2 font-bold">HairHaven</p>
        <img
          src="entypo_scissors.png"
          alt=""
          className="text-black hidden lg:block  rounded-full mx-2 bg-[#005E54] "
        />{" "}
      </div>
      <div className="lg:flex  hidden gap-7 mx-48">
        <p onClick={goToMain} className="font-bold">
          Home
        </p>
        <p onClick={goToAboutpage} className="text-[#005E54] font-bold">
          About Us
        </p>
        <p onClick={goToGallerypage} className="font-bold">
          Gallery
        </p>
        <p onClick={goToOurpartners1} className="font-bold">
          Partners
        </p>
        <p className="font-bold">Download</p>
      </div>
      <div className="hidden lg:block mx-10">
        <p onClick={goToContactpage} className="font-bold">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Header2;
