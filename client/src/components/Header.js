import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  Button,
  Divider,
  Box,
  OutlinedInput,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { ethFaucet } from "../api/post-eth-faucet";
import { UserContext } from "./Context/UserContext";
import styles from "../assets/Header.module.css";

const headerStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "#fff",
  zIndex: 999,
  border: "1px solid #d3d3d3",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
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
  const { user, setUser } = useContext(UserContext);

  const location = useLocation();
  const [loginButtonHover, setLoginButtonHover] = useState(false);
  const [ethFaucetButtonHover, setEthFaucetButtonHover] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [open, setOpen] = useState(false); // Modal Open handling
  const navigate = useNavigate();

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

  const handleEthFaucetClicked = async () => {
    try {
      console.log(user.accessToken);
      const result = await ethFaucet(user.accessToken);
      alert(result.msg);
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const LogoutModal = () => {
    setOpen(true);
  };

  const ModalClose = () => {
    setOpen(false);
  };

  const Logout = () => {
    window.location.replace("/login");
    // setOpen(false);
    // setUser({
    //   isLogin: false,
    //   accessToken: "",
    //   nickname: "",
    //   address: "",
    //   token_amount: "",
    //   eth_amount: "",
    //   nfts: [],
    //   posts: [],
    // });
  };

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
            style={
              ethFaucetButtonHover
                ? ethFaucetButtonHoverStyle
                : ethFaucetButtonStyle
            }
            onMouseEnter={handleEthFaucetButtonMouseEnter}
            onMouseLeave={handleEthFaucetButtonMouseLeave}
            onClick={handleEthFaucetClicked}
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

          {user.isLogin ? (
            <>
              <Link>
                <Button
                  startIcon={
                    <AccountCircleOutlinedIcon sx={{ marginRight: "0px" }} />
                  }
                  style={isLoginPage ? pinkButtonStyle : loginButtonStyle}
                  onMouseEnter={handleLoginButtonMouseEnter}
                  onMouseLeave={handleLoginButtonMouseLeave}
                  onClick={LogoutModal}
                >
                  Logout
                </Button>
                <Dialog
                  open={open}
                  onClose={ModalClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  className={styles.logoutModal}
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Confirm Logout"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description"></DialogContentText>
                    Are you sure you want to logout?
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={ModalClose} sx={{ color: "#000" }}>
                      Cancel
                    </Button>
                    <Button onClick={Logout} autoFocus sx={{ color: "red" }}>
                      Logout
                    </Button>
                  </DialogActions>
                </Dialog>
              </Link>
            </>
          ) : (
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
          )}
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
