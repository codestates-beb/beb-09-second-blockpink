import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Button, Divider, Box, OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalAtmIcon from '@mui/icons-material/LocalAtm'; 
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
  color: "#ff006c",
  fontFamily: "Nanum Myeongjo, Arial, sans-serif",
};

const ethFaucetButtonStyle = {
  color: "#000",
  fontWeight: "bold",
  marginLeft: "50px",
};

const loginButtonStyle = {
  color: "#000",
  fontWeight: "bold",
  paddingLeft: "8.5%"
};

export default function Header() {
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
              style={logoStyle}
            />
            <span style={sweeterTextStyle}>Sweeter</span>
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
        <Grid item xs={3} style={{ display: "flex" }}>
          <Button
            color="secondary"
            startIcon={<LocalAtmIcon />}
            style={ethFaucetButtonStyle}
          >
            ETH faucet
          </Button>
          <Button
            startIcon={<AccountCircleOutlinedIcon />}
            style={loginButtonStyle}
          >
            Login
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}