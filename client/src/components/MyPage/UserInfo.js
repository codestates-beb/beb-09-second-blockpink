import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/UserInfo.module.css";
import { Typography, Button, Modal, Box, TextField } from "@mui/material";
import SendOutlinedIcon from '@mui/icons-material/Send';

import { UserContext } from "../Context/UserContext";

// api
import { sendTokenToUser } from "../../api/post-send-token";

const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [tokenAmount, setTokenAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
    width: 350,
    height: 380,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <div className={styles.walletAddress}>
        <div>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h4"
              color="#000"
              fontWeight="550"
              fontSize={37}
              style={{ marginLeft: "-55%", marginTop: "-2%" }}
            >
              {user.nickname}
            </Typography>
          </div>
          <Typography
            variant="h6"
            color="#000"
            fontWeight="800"
            fontSize={18}
            style={{ marginLeft: "-54%", marginTop: "5%" }}
          >
            Wallet Address |
          </Typography>
          <Typography
            color="#777"
            fontWeight="800"
            fontSize={17}
            style={{ marginLeft: "-18.7%", marginTop: "-6.6%" }}
          >
            {user.address}
          </Typography>
          <div>
            <Typography
              variant="h6"
              fontWeight="800"
              style={{ marginLeft: "-54%", marginTop: "1.3%", fontSize: 17 }}
            >
              <span style={{ color: "#000" }}>Sweet Token Amount</span> |{" "}
              <span style={{ color: "#777" }}>{`${user.token_amount} SWT`}</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="h6"
              fontWeight="800"
              style={{ marginLeft: "-54%", marginTop: "1.3%", fontSize: 17 }}
            >
              <span style={{ color: "#000" }}>ETH Amount</span> |{" "}
              <span style={{ color: "#777" }}>{`${user.eth_amount} ETH`}</span>
            </Typography>
          </div>
        </div>
        <div className={styles.button}>
          <Button
            style={{
              margin: "0.5rem",
              marginTop: "-9px",
              marginLeft: "-285px",
              color: "#fff",
              backgroundColor: "#ff006c",
            }}
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              width: "100px",
              height: "44px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
            onClick={handleOpen}
          >
            Send SWT
          </Button>
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                ...style,
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "-50px" }}>
                <SendOutlinedIcon style={{ fontSize: 70, color: "gray" }} />
              </div>
              <Typography fontSize={20} component="h2" fontWeight="bold" marginLeft="55px" marginTop="80px">
                Recipient Email to <span style={{ color: "#ff006c", backgroundColor: "#f4f4f4" }}>send</span>
              </Typography>
              <TextField
                label="recipient email"
                value={recipient}
                onChange={(e) => {
                  setRecipient(e.target.value);
                }}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "20px",
                  },
                }}
                style={{ marginTop: "10px" }}
              />
              <Typography fontSize={20} component="h2" fontWeight="bold" marginLeft="61.5px" marginBottom="-70px" marginTop="20px">
                Token amount to <span style={{ color: "#ff006c", backgroundColor: "#f4f4f4" }}>send</span>
              </Typography>
              <TextField
                label="token amount"
                value={tokenAmount}
                onChange={(e) => {
                  setTokenAmount(e.target.value);
                }}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "20px",
                  },
                }}
                style={{ marginTop: "80px" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  style={{
                    width: "170px",
                    height: "55px",
                    display: "block",
                    fontSize: "14px",
                    borderRadius: "15px",
                    backgroundColor: "#dbdee9",
                    color: "#36383a",
                    marginTop: "30px",
                  }}
                  onClick={handleClose}
                >
                  CLOSE
                </Button>
                <Button
                  style={{
                    width: "170px",
                    height: "55px",
                    display: "block",
                    fontSize: "14px",
                    borderRadius: "15px",
                    backgroundColor: "#ff006c",
                    color: "#fff",
                    marginLeft: "-30px",
                    marginTop: "30px",
                  }}
                  onClick={sendToken}
                >
                  Send
                </Button>
              </div>
            </Box>
          </Modal>
          <Button
            style={{
              display: "block",
              marginTop: "-51px",
              marginLeft: "-175px",
              color: "#fff",
              backgroundColor: "#ff006c",
            }}
            variant="contained"
            sx={{
              alignSelf: "flex-start",
              width: "100px",
              height: "43px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            FOLLOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;