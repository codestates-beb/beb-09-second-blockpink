import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';

import CreatePosts from "../components/CreatePosts";

export default function WritePage() {
  return (
    <Container>
      <CreatePosts />
    </Container>
  );
}