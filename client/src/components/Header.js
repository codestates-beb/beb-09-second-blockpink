import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  Button,
  Divider,
  Box,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const headerStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "#fff",
  zIndex: 999,
  border: "1px solid #d3d3d3",
};

const logoStyle = {
  width: "8%",
  height: "auto",
  marginLeft: "-30%",
};

const sweeterContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const sweeterTextStyle = {
  fontSize: "26px",
  fontWeight: "800",
  marginLeft: "4%",
  backgroundImage: "linear-gradient(to right, #ff006c, #000)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "Nanum Myeongjo, Arial, sans-serif",
};

const ethFaucetButtonStyle = {
  color: "#000",
  fontWeight: "bold",
  marginLeft: "50px",
  whiteSpace: "nowrap",
};

const ethFaucetButtonHoverStyle = {
  ...ethFaucetButtonStyle,
  backgroundColor: "#fff",
  color: "#ff006c",
};

const loginButtonStyle = {
  color: "#000",
  fontWeight: "bold",
  paddingLeft: "20%",
  whiteSpace: "nowrap",
  backgroundColor: "#fff",
};

const pinkButtonStyle = {
  color: "#ff006c",
  fontWeight: "bold",
  paddingLeft: "20%",
  whiteSpace: "nowrap",
  backgroundColor: "#fff",
};

export default function Header() {
  const location = useLocation();
  const [loginButtonHover, setLoginButtonHover] = useState(false);
  const [ethFaucetButtonHover, setEthFaucetButtonHover] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    setIsLoginPage(location.pathname === "/login");
  }, [location]);

  const handleLoginButtonMouseEnter = () => {
    setLoginButtonHover(true);
  };

  const handleLoginButtonMouseLeave = () => {
    setLoginButtonHover(false);
  };

  const handleEthFaucetButtonMouseEnter = () => {
    setEthFaucetButtonHover(true);
  };

  const handleEthFaucetButtonMouseLeave = () => {
    setEthFaucetButtonHover(false);
  };

  useEffect(() => {
    setIsLoginPage(location.pathname === "/login");
  }, [location]);

  return (
    <div style={headerStyle}>
      <Grid
        container
        style={{ margin: "0 4rem", padding: "1rem", alignItems: "center" }}
      >
        <Grid item xs={3} container alignItems="center">
          <Link to="/" style={sweeterContainerStyle}>
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
             alt="Logo"
              style={{
                ...logoStyle,
              }}
            />
            <span
              style={{
                ...sweeterTextStyle,
                color: "#ff006c",
              }}
            >
              Sweeter
            </span>
          </Link>
        </Grid>
        <Grid item xs={5.6}>
          <Box sx={{ width: "84.5%", borderRadius: 20, boxShadow: 1 }}>
            <OutlinedInput
              placeholder=""
              size="small"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              style={{ width: "100%", borderRadius: 20 }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={2.5}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            color="secondary"
            startIcon={<LocalAtmIcon />}
            style={ethFaucetButtonHover ? ethFaucetButtonHoverStyle : ethFaucetButtonStyle}
            onMouseEnter={handleEthFaucetButtonMouseEnter}
            onMouseLeave={handleEthFaucetButtonMouseLeave}
          >
            <span
              style={{
                display: "inline-block",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              ETH faucet
            </span>
          </Button>

          <Link to="/login">
            <Button
              startIcon={<AccountCircleOutlinedIcon />}
              style={isLoginPage ? pinkButtonStyle : loginButtonStyle}
              onMouseEnter={handleLoginButtonMouseEnter}
              onMouseLeave={handleLoginButtonMouseLeave}
            >
              Login
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}