import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "../assets/SignUpPage.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] = useState("");
  const [mismatch, setMismatch] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleNickNameChange = (event) => {
    const value = event.target.value;
    setNickName(value);

    if (isMoreThan4Length(value)) {
      setFailureMessage(false);
      setSuccessMessage(true);
    } else {
      setFailureMessage(true);
      setSuccessMessage(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    checkPasswordMatch(event.target.value, passwordRetype);
  };

  const handlePasswordRetypeChange = (event) => {
    setPasswordRetype(event.target.value);
    checkPasswordMatch(password, event.target.value);
  };

  const checkPasswordMatch = (password1, password2) => {
    if (password1 === password2) {
      setMismatch(false);
    } else {
      setMismatch(true);
    }
  };

  const isMoreThan4Length = (value) => {
    return value.length > 4;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "646px",
        maxWidth: "100%",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <Box sx={{ alignSelf: "flex-start" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Sign Up
        </Typography>
      </Box>
      <Box sx={{ alignSelf: "flex-start" }}>
        <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
          <Box sx={{ alignSelf: "flex-start" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Email <span style={{ fontWeight: "bold" }}>*</span>
            </Typography>
            <input
              type="email"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Box>
        </Typography>
      </Box>

      <Box sx={{ alignSelf: "flex-start" }}>
        <Typography variant="caption" sx={{ fontSize: "0.8rem" }}>
          <Box sx={{ alignSelf: "flex-start" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Nickname <span style={{ fontWeight: "bold" }}>*</span>
            </Typography>
            <input
              type="text"
              id="nickName"
              value={nickName}
              onChange={handleNickNameChange}
            />
            <div
              className={
                failureMessage ? "failure-message" : "failure-message hide"
              }
            >
              Your NickName should be longer than 4 characters
            </div>
            <div
              className={
                successMessage ? "success-message" : "success-message hide"
              }
            >
              You can use this NickName
            </div>
          </Box>
        </Typography>
      </Box>

      <Box sx={{ alignSelf: "flex-start" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Password <span style={{ fontWeight: "bold" }}>*</span>
        </Typography>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Box>

      <Box sx={{ alignSelf: "flex-start" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          Confirm Password <span style={{ fontWeight: "bold" }}>*</span>
        </Typography>
        <input
          type="password"
          id="password-retype"
          value={passwordRetype}
          onChange={handlePasswordRetypeChange}
        />
        <div
          className={mismatch ? "mismatch-message" : "mismatch-message hide"}
        >
          Passwords do not match
        </div>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid rgb(204, 204, 204)",
          width: "100%",
          margin: "20px 0",
        }}
      ></Box>
      <Button
        variant="contained"
        sx={{
          alignSelf: "flex-start",
          width: "120px",
          height: "50px",
          borderRadius: "15px",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};
export default SignUpPage;
