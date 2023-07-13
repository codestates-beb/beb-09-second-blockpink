import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Posting(props) {
  const [expanded, setExpanded] = useState({ 0: true });
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/random?client_id=5X7gASivuOtYl_4IEetCBbuN-8F-PVnK4TOGNcrhIBg")
      .then((response) => response.json())
      .then((data) => setImage(data.urls.regular))
      .catch((error) => console.error(error));
  }, []);

  const handleExpandClick = (cardIndex) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [cardIndex]: !prevExpanded[cardIndex],
    }));
  };

  return (
    <Card
      sx={{
        width: "50%",
        marginTop: { xs: "3%", sm: "5%", md: "0%", lg: "-1%", xl: "0%" },
        marginBottom: "2%",
        borderRadius: "20px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={image} sx={{ marginLeft: "-5px" }} />}
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={
          <Typography variant="h8" component="div" style={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "bold", fontSize: "15px", marginLeft: '1px' }}>
            <Typography variant="body1" style={{ fontSize: "14px", fontWeight: "600", marginLeft: "-5px", marginRight: '13px' }}>
              Jennie28
            </Typography>
            <Typography variant="h8" style={{ marginRight: "auto", fontWeight: "500", fontSize: "13px" }}>
              돌을 놓고 본다 초면인 돌을 사흘 걸러 한 번 같은 말을 낮게 반복해 돌 속에 넣어본다 처음으로 오늘에 웃으시네 소금 같은 싸락눈도 흩날리게 조금 돌 속에 넣어본다.
            </Typography>
          </Typography>
        }
      />
      <div style={{ display: "flex", alignItems: "center", marginTop: "-15px" }}>
        <IconButton aria-label="like" size="small">
          <FavoriteIcon fontSize="small" style={{ fontSize: "12px", fontWeight: "500", marginLeft: "138px" }} />
        </IconButton>
        <Typography variant="caption" style={{ fontSize: "12px", fontWeight: "500", marginLeft: "0px", marginRight: '15px' }}>
          좋아요
        </Typography>
        <IconButton aria-label="comment" size="small">
          <ChatBubbleOutlineIcon fontSize="small" />
        </IconButton>
        <Typography variant="caption" style={{ fontSize: "12px", fontWeight: "500", marginLeft: "0px" }}>
          댓글
        </Typography>
      </div>
    </Card>
  );
}