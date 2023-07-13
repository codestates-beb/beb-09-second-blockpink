import React from "react";
import { Box } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <img src="/loading.gif" alt="Loading..." />
    </Box>
  );
};

export default Loading;
