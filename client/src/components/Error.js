import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import PhonelinkOffOutlinedIcon from '@mui/icons-material/PhonelinkOffOutlined';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  paddingTop: "11vh",
  textAlign: "center",
  backgroundColor: "#f8f9fa",
  fontFamily: "Arial, sans-serif",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: "16px",
  color: "#333",
  whiteSpace: "normal",
}));

const Description = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    marginBottom: "32px",
    color: "#666",
  }));  

const IconContainer = styled(Box)({
  marginBottom: "15px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const StyledButton = styled(Button)({
  backgroundColor: "#ff006c",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "4px",
  fontWeight: "bold",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#e20060",
  },
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
  borderRadius: "15px",
});

const PhoneIcon = styled(PhonelinkOffOutlinedIcon)(({ theme }) => ({
  fontSize: '100px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '90px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '80px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '70px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '60px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '50px',
  },
}));

const SentimentIcon = styled(SentimentVeryDissatisfiedIcon)(({ theme }) => ({
  fontSize: '60px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '50px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '48px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '20px',
  },
}));

export default function ErrorPage() {
  return (
    <Container>
      <IconContainer>
        <PhoneIcon />
      </IconContainer>
      <Title variant="h1">
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ fontSize: { xl: '60px', md: '50px', sm: '40px', xs: '33px' } }}>
          4
          <Box marginTop="2.6%" marginLeft="1px" >
            <SentimentIcon />
          </Box>
          4 - Not Found
        </Box>
      </Title>
      <Description variant="body1" style={{ color: "#bbbbbb", fontWeight: 'bold' }}>
        <Box sx={{ fontSize: { xl: '23px', md: '17px', sm: '15px', xs: '12px' } }}>
          The page you are looking for does not exist.
        </Box>
      </Description>
      <StyledLink to="/">
        <StyledButton variant="contained" style={{ fontSize: '15px', fontWeight: 'bold' }}>Go back to Homepage</StyledButton>
      </StyledLink>
    </Container>
  );
}