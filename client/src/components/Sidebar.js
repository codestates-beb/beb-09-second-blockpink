import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PostAddIcon from "@mui/icons-material/PostAdd";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const sidebarStyle = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "15%",
  height: "100%",
  backgroundColor: "#fff",
  padding: "1.5%",
  paddingTop: "5.5%",
  overflowY: "auto",
  border: "1px solid #d3d3d3",
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
};

const linkStyle = {
  display: "block",
  paddingTop: "30px",
  textDecoration: "none",
};

const textStyle = {
  color: "black",
  fontSize: "15px",
  fontWeight: "bold",
};

const searchStyle = {
  marginTop: "20%",
};

const inputStyle = {
  borderColor: "transparent",
  boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.2)",
  borderRadius: "15px",
};

export default function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <div style={linkStyle}>
        <Button
          color="secondary"
          component={Link}
          to="/"
          startIcon={<HomeIcon />}
          style={textStyle}
        >
          Home
        </Button>
      </div>
      <div style={linkStyle}>
        <Button
          color="secondary"
          component={Link}
          to="/mypage"
          startIcon={<PersonIcon />}
          style={textStyle}
        >
          Profile
        </Button>
      </div>
      <div style={linkStyle}>
        <Button
          color="secondary"
          component={Link}
          to="/"
          startIcon={<NotificationsIcon />}
          style={textStyle}
        >
          Notifications
        </Button>
      </div>
      <div style={linkStyle}>
        <Button
          color="secondary"
          component={Link}
          to="/mint"
          startIcon={<MonetizationOnIcon />}
          style={textStyle}
        >
          NFT Market
        </Button>
      </div>
      <div style={linkStyle}>
        <Button
          color="secondary"
          component={Link}
          to="/write"
          startIcon={<PostAddIcon />}
          style={textStyle}
        >
          Post
        </Button>
      </div>
      <div style={searchStyle}>
        <TextField
          size="small"
          placeholder=""
          fullWidth
          InputProps={{
            startAdornment: <SearchIcon />,
            style: inputStyle,
          }}
        />
      </div>
    </div>
  );
}
