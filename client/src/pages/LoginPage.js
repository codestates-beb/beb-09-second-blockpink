import React, { useState } from "react";
import { 
    Box, 
    Button, 
    Typography, 
  } from '@mui/material';
import "../assets/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '646px',
        maxWidth: '100%',
        margin: '0 auto',
        marginTop: '100px',
      }}
    >
      <Box sx={{ alignSelf: 'flex-start' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Login</Typography>
      </Box>
      <Box sx={{ alignSelf: 'flex-start' }}>
        <Typography variant="caption" sx={{ fontSize: '0.8rem' }}>
          <Box sx={{ alignSelf: 'flex-start' }}>
            <Typography variant='body1' sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              ID <span style={{ fontWeight: 'bold' }}>*</span>
            </Typography>
            <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
            />
            </Box>
        </Typography>
      </Box>

      <Box sx={{ alignSelf: 'flex-start' }}>
        <Typography variant='body1' sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Password <span style={{ fontWeight: 'bold' }}>*</span>
        </Typography>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          alignSelf: 'flex-start',
          width: '120px',
          height: '50px',
          borderRadius: '15px'
        }}
      >
        Login
      </Button>
    </Box>
  );
};
export default LoginPage;