import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [hoveredText, setHoveredText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('로그인 성공');
      } else {
        console.error('로그인 실패');
        setErrorMessage('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      setErrorMessage('로그인 중 오류가 발생했습니다.');
    }
  };

  const validateForm = () => {
    let isValid = true;

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('유효한 이메일 형식이 아닙니다.');
      isValid = false;
    } else if (password.length < 8) {
      setErrorMessage('비밀번호는 최소 8자 이상이어야 합니다.');
      isValid = false;
    } else {
      setErrorMessage('');
    }

    return isValid;
  };

  const handleTextHover = (text) => {
    setHoveredText(text);
  };

  const handleTextLeave = () => {
    setHoveredText('');
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh',
        paddingTop: '12vh',
      }}
    >
      <Box
        component="h2"
        sx={{
          fontWeight: 'bold',
          fontSize: '45px',
          fontFamily: 'Nanum Myeongjo, Arial, sans-serif',
          my: 2,
          position: 'relative',
        }}
      >
        <img
          src="/LoginLogo.png"
          alt="logo"
          style={{
            width: '16%',
            position: 'absolute',
            top: -43,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        Sweeter
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
          width: '40%',
          margin: '0 auto',
        }}
      >
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          margin="normal"
          required
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '20px',
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
          width: '40%',
          margin: '0 auto',
        }}
      >
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          margin="normal"
          required
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '20px',
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
          width: '40%',
          margin: '0 auto',
          justifyContent: 'flex-start',
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: '24px',
                  color: checked ? '#ff006c' : '#9a9a9a',
                },
              }}
            />
          }
          label={<span style={{ fontWeight: '600', color: '#9a9a9a' }}>Remember me</span>}
          sx={{
            justifyContent: 'flex-start',
          }}
        />
        <div style={{ marginLeft: 'auto' }}>
          <span
            style={{ fontWeight: '600', color: hoveredText === 'IP Security' ? '#ff006c' : '#9a9a9a' }}
            onMouseEnter={() => handleTextHover('IP Security')}
            onMouseLeave={handleTextLeave}
          >
            IP Security
          </span>
          <Switch {...label} />
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
          width: '40%',
          margin: '0 auto',
          justifyContent: 'center',
        }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            width: '100%',
            height: 55,
            fontSize: '16px',
            backgroundColor: '#ff006c',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.4)',
            borderRadius: '20px',
            '&:hover': { backgroundColor: '#BE3455' },
            position: 'sticky',
            top: '12vh',
            fontSize: '15px',
            fontWeight: '800',
          }}
        >
          LOGIN
        </Button>
      </Box>
      {errorMessage && (
        <span style={{ color: 'red', marginTop: '1rem' }}>{errorMessage}</span>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '39%',
          margin: '0 auto',
          marginTop: '2.5%',
        }}
      >
        <span
          style={{ fontWeight: 'bold', color: hoveredText === 'Find Password' ? '#ff006c' : '#7a7a7a', cursor: 'pointer', marginLeft: '13%', fontSize: '15px', transition: 'color 0.3s ease' }}
          onMouseEnter={() => handleTextHover('Find Password')}
          onMouseLeave={handleTextLeave}
        >
          Find Password
        </span>
        <div
          style={{
            width: '2px',
            height: '16px',
            backgroundColor:'#7a7a7a',
            marginLeft: '-2%'
          }}
        ></div>
        <span
          style={{ fontWeight: 'bold', color: hoveredText === 'Find ID' ? '#ff006c' : '#7a7a7a', cursor: 'pointer', marginLeft: '-2%', fontSize: '15px', transition: 'color 0.3s ease' }}
          onMouseEnter={() => handleTextHover('Find ID')}
          onMouseLeave={handleTextLeave}
        >
          Find ID
        </span>
        <div
          style={{
            width: '2px',
            height: '16px',
            backgroundColor: '#7a7a7a',
            marginLeft: '-2%',
          }}
        ></div>
        <span
          style={{
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '18%',
            fontSize: '15px',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={() => handleTextHover('Sign Up')}
          onMouseLeave={handleTextLeave}
        >
          <a href="/signup" style={{ color: hoveredText === 'Sign Up' ? '#d9005c' : '#ff006c' }}>
            Sign Up
          </a>
        </span>
      </Box>
      <span
        style={{ color: '#bbb', fontSize: '12px', marginTop: '3%' }}
      >
        Copyright © SWEETER 2023
      </span>
    </Box>
  );
}