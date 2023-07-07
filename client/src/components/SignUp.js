import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [hoveredText, setHoveredText] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formIsValid = validateForm();
    if (formIsValid) {
      try {
        // 아이디 중복 확인을 위한 API 요청
        const response = await fetch('/api/checkUsername', {
          method: 'POST',
          body: JSON.stringify({ username: name }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          console.log('회원가입 성공');
          // 추가적인 회원가입 처리 로직 작성
        } else {
          const data = await response.json();
          const errors = {
            ...errors,
            name: data.message, // 아이디 중복 시 서버에서 전달한 메시지
          };
          setErrors(errors);
        }
      } catch (error) {
        console.error('회원가입 실패:', error);
        // 실패 시 처리 로직 작성
      }
    }
  };
  

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (name.trim() === '') {
      errors.name = '닉네임을 입력해주세요.';
      isValid = false;
    }

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      errors.email = '유효한 이메일 형식이 아닙니다.';
      isValid = false;
    }

    if (password.length < 8) {
      errors.password = '비밀번호는 최소 8자 이상이어야 합니다.';
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
      isValid = false;
    }

    if (!isChecked) {
      errors.isChecked = '약관에 동의해야 합니다.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTextHover = (text) => {
    setHoveredText(text);
  };

  const handleTextLeave = () => {
    setHoveredText('');
  };

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
          label="Nickname"
          value={name}
          onChange={(event) => setName(event.target.value)}
          margin="normal"
          required
          error={!!errors.name}
          helperText={errors.name}
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
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          margin="normal"
          required
          error={!!errors.email}
          helperText={errors.email}
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
          error={!!errors.password}
          helperText={errors.password}
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
        <TextField
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          margin="normal"
          required
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
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
          justifyContent: 'center',
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: '24px',
                  color: isChecked ? '#ff006c' : '#9a9a9a',
                },
              }}
            />
          }
          label={
            <span style={{ fontWeight: '600', color: '#9a9a9a9a' }}>
              I agree to the terms and conditions
            </span>
          }
          error={!!errors.isChecked}
          helperText={errors.isChecked}
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
          SIGN UP
        </Button>
      </Box>
      <span
        style={{
          fontWeight: 'bold',
          color: hoveredText === 'Find ID' ? '#ff006c' : '#9a9a9a',
          cursor: 'pointer',
          marginTop: '1.2%',
          marginLeft: '35%',
          fontSize: '16px',
          transition: 'color 0.3s ease',
          textDecoration: 'underline',
        }}
        onMouseEnter={() => handleTextHover('Find ID')}
        onMouseLeave={handleTextLeave}
      >
        <a href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
          Login
        </a>
      </span>
      {errors.isChecked && (
        <span style={{ color: 'red', marginTop: '1rem' }}>{errors.isChecked}</span>
      )}
      <span style={{ color: '#bbb', fontSize: '12px', marginTop: '2%' }}>
        Copyright © SWEETER 2023
      </span>
    </Box>
  );
}