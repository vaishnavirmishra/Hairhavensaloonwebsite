import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Link, useNavigate } from "react-router-dom";
import BasicModal1 from "./Modal1";
import TemporaryDrawer from "./Drawer";
import TemporaryDrawer1 from "./Drawer";
const Header = () => {
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

  //   <Box
  //     sx={{
  //       width: 250,
  //       height: "100vh", // Full height
  //       bgcolor: "black", // Background color black
  //       color: "white", // Text color white
  //     }}
  //     role="presentation"
  //     onClick={() => toggleDrawer(false)}
  //   >
  //     <List className="bg-black text-white">
  //       {[
  //         { text: "Home", path: "/" },
  //         { text: "About Us", path: "/aboutpage" },
  //         { text: "Gallery", path: "/gallery" },
  //         { text: "Partners", path: "/partners" },
  //         { text: "Download", path: "/download" },
  //         { text: "Contact", path: "/contact" },
  //       ].map(({ text, path }) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton component={Link} to={path}>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //   </Box>
  // );
  return (
    <div className="lg:flex flex lg:p-10 bg-black">
      <div className="flex gap-11 ">
        <div className="mx-3 p-5 flex lg:hidden">
          {" "}
          <p className="font-bold ml-1 text-white">HairHaven</p>
          <img
            src="entypo_scissors.png"
            alt=""
            className=" rounded-full size-6 bg-[#005E54] "
          />
        </div>
        <div className="block mx-6  lg:hidden  mt-3">
          <TemporaryDrawer1 />
        </div>
      </div>
      <div className="lg:flex  lg:mx-24 mx-28">
        <p className="font-bold  lg:block hidden text-white">HairHaven</p>
        <img
          src="entypo_scissors.png"
          alt=""
          className=" rounded-full mx-2   lg:block hidden bg-[#005E54] "
        />{" "}
      </div>
      <div className="lg:flex hidden lg:gap-7 lg:mx-52 mx-28">
        <p className="font-bold text-[#0EBDAA]">Home</p>
        <p onClick={goToAboutpage} className=" font-bold text-white ">
          About Us
        </p>
        <p onClick={goToGallerypage} className="font-bold text-white">
          Gallery
        </p>
        <p onClick={goToOurpartners1} className="font-bold text-white">
          Partners
        </p>
        <p className="font-bold text-white">Download</p>
      </div>
      <div className="lg:mx-14   lg:flex  hidden mx-28">
        <p onClick={goToContactpage} className="font-bold text-white">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Header;
