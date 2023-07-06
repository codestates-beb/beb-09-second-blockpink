import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import Posting from "../components/Posting";

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mt: 2,

  '& > :not(:first-child)': {
    marginTop: theme.spacing(1),
  },
}));

export default function MainPage() {
  return (
    <Container>
      <Posting />
      <Posting />
      <Posting />
    </Container>
  );
}
