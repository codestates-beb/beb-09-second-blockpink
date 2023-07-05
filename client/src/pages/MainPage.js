import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import Posting from "../components/Posting";

export default function MainPage() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Posting />
      <Posting />
    </Box>
  );
}
