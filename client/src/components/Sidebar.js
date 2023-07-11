import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PostAddIcon from "@mui/icons-material/PostAdd";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { styled } from "@mui/system";

import { UserContext } from "./Context/UserContext";

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

const activeLinkStyle = {
  color: "#ff006c",
};

const searchStyle = {
  marginTop: "20%",
};

const inputStyle = {
  borderColor: "transparent",
  boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.2)",
  borderRadius: "15px",
};

const MyButton = styled(Button)({
  "&:hover": {
    color: "#ff006c !important",
    backgroundColor: "transparent",
  },
});

export default function Sidebar() {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  const isActiveLink = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <div style={sidebarStyle}>
      <div style={linkStyle}>
        <MyButton
          color="secondary"
          component={Link}
          to="/"
          startIcon={<HomeOutlinedIcon />}
          style={
            isActiveLink("/") ? { ...textStyle, ...activeLinkStyle } : textStyle
          }
        >
          Home
        </MyButton>
      </div>
      <div style={linkStyle}>
        {user.isLogin ? (
          <MyButton
            color="secondary"
            component={Link}
            to="/mypage"
            startIcon={<PersonOutlineIcon />}
            style={
              isActiveLink("/mypage")
                ? { ...textStyle, ...activeLinkStyle }
                : textStyle
            }
          >
            Profile
          </MyButton>
        ) : (
          <MyButton
            color="secondary"
            component={Link}
            to="/login"
            startIcon={<PersonOutlineIcon />}
            style={
              isActiveLink("/mypage")
                ? { ...textStyle, ...activeLinkStyle }
                : textStyle
            }
          >
            Profile
          </MyButton>
        )}
      </div>
      <div style={linkStyle}>
        <MyButton
          color="secondary"
          component={Link}
          to="/mint"
          startIcon={<StorefrontOutlinedIcon />}
          style={isActiveLink("/mint") ? { ...textStyle, ...activeLinkStyle } : textStyle}
        >
          NFT Market
        </MyButton>
      </div>
      <div style={linkStyle}>
        <MyButton
          color="secondary"
          component={Link}
          to="/write"
          startIcon={<PostAddIcon />}
          style={isActiveLink("/write") ? { ...textStyle, ...activeLinkStyle } : textStyle}
        >
          Post
        </MyButton>
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
