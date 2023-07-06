import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import PostingDetail from "../components/PostingDetail";
import Comment from "../components/Comment";
import CommentCreate from "../components/CommentCreate";

export default function DetailPage() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <PostingDetail />
        <Comment />
        <Comment />
        <CommentCreate />
      </Box>
    </div>
  );
}
