import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "18rem",
  height: "auto",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#005E54",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
};

export default function BasicModal1() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/newpage");
  };

  const handleNavigate = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <MenuIcon className="text-black" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Close button */}
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "#005E54",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            sx={{ mt: 2, mx: 3, cursor: "pointer" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            onClick={() => handleNavigate("/")} // Navigate to home
          >
            Home
          </Typography>
          <Typography
            sx={{ mt: 2, mx: 2, cursor: "pointer" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            onClick={() => handleNavigate("/aboutpage")} // Navigate to about us
          >
            About Us
          </Typography>
          <Typography
            sx={{ mt: 2, mx: 3, cursor: "pointer" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            onClick={() => handleNavigate("/gallery")} // Navigate to gallery
          >
            Gallery
          </Typography>
          <Typography
            sx={{ mt: 2, mx: 2, cursor: "pointer" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            onClick={() => handleNavigate("/partners")} // Navigate to partners
          >
            Partners
          </Typography>
          <Typography
            sx={{ mt: 2, mx: 2, cursor: "pointer" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            onClick={() => handleNavigate("/download")} // Navigate to download
          >
            Download
          </Typography>
          <Typography
            sx={{ mt: 2, mx: 3, cursor: "pointer" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            onClick={() => handleNavigate("/contact")} // Navigate to contact
          >
            Contact
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
