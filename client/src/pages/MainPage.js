import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import Posting from "../components/Posting";

// api
import { getAllPosting } from "../api/get-all-posting";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mt: 2,

  "& > :not(:first-child)": {
    marginTop: theme.spacing(1),
  },
}));

export default function MainPage() {
  const [postId, setPostId] = useState([]);

  useEffect(() => {
    getAllPosting()
      .then((res) => {
        console.log(res);
        setPostId(res);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Container>
      {postId.map((id) => {
        return <Posting id={id} key={id} />;
      })}
    </Container>
  );
}
