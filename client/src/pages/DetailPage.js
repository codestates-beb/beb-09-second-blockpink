import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Divider } from "@mui/material";

import Posting from "../components/Posting";

export default function DetailPage() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Posting />
      </Box>
    </div>
  );
}
