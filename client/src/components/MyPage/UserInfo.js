import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/UserInfo.module.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Typography, Button, Modal, Box, TextField } from "@mui/material";

import { UserContext } from "../Context/UserContext";

// api
import { sendTokenToUser } from "../../api/post-send-token";

const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [tokenAmount, setTokenAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    setUser({
      isLogin: false,
      accessToken: "",
      nickname: "",
      address: "",
      token_amount: "",
      eth_amount: "",
      nfts: [],
      posts: [],
    });
    navigate("/login");
  };

  const sendToken = async () => {
    const result = await sendTokenToUser(
      recipient,
      tokenAmount,
      user.accessToken
    );
    alert(result.msg);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <div className={styles.walletAddress}>
        <div>
          <div style={{ display: "flex" }}>
            <Typography variant="h4" color="#000">
              {user.nickname}
            </Typography>
            <AccountBalanceWalletIcon className={styles.walletIcon} />
          </div>
          <Typography variant="h6" color="#000">
            Wallet Address
          </Typography>
          <Typography>{user.address}</Typography>
          <div>
            <Typography variant="h6" color="#000">
              {`Sweet Token Amount: ${user.token_amount}`}
            </Typography>
          </div>
        </div>
        <div>
          <Button
            style={{ margin: "0.5rem" }}
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              width: "120px",
              height: "50px",
              borderRadius: "15px",
            }}
            onClick={handleOpen}
          >
            Send SWT
          </Button>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Recipient Email to send
              </Typography>
              <TextField
                label="recipient email"
                value={recipient}
                onChange={(e) => {
                  setRecipient(e.target.value);
                }}
              ></TextField>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Token amount to send
              </Typography>
              <TextField
                label="token amount"
                value={tokenAmount}
                onChange={(e) => {
                  setTokenAmount(e.target.value);
                }}
              ></TextField>
              <Button style={{ display: "block" }} onClick={sendToken}>
                Send
              </Button>
            </Box>
          </Modal>
          <Button
            style={{ display: "block", margin: "0.5rem" }}
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              width: "120px",
              height: "50px",
              borderRadius: "15px",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
