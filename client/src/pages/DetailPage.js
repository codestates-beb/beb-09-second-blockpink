import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import PostingDetail from "../components/PostingDetail";
import Comment from "../components/Comment";
import CommentCreate from "../components/CommentCreate";

// api
import { getPosting } from "../api/get-posting";

export default function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    getPosting(id)
      .then((res) => {
        setPost({
          nickname: res.nickname,
          title: res.post.title,
          content: res.post.content,
          createdAt: res.post.createdAt,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <PostingDetail post={post} />
        <Comment />
        <Comment />
        <CommentCreate />
      </Box>
    </div>
  );
}
