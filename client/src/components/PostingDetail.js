import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

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
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
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
        marginTop: { xs: "18%", sm: "13%", md: "9%", lg: "7.5%", xl: "5%" },
        marginBottom: "2%",
        boxShadow: "none",
        backgroundColor: "#f9f9f9",
      }}
    >
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={image} sx={{ marginLeft: "-14px" }} />}
        action={
          <IconButton aria-label="settings" style={{ marginLeft: "55%" }}>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <span>
            <Typography variant="h8" component="div" style={{ fontWeight: "bold", fontSize: "15px", marginLeft: "-5px", display: "inline" }}>
              블록핑크
            </Typography>
            <Typography style={{ fontSize: '12px', fontWeight: 400, position: 'relative', top: '-1.5px', marginLeft: '1.5%', color: 'gray', display: "inline" }}>
              7시간 전
            </Typography>
          </span>
        }
        subheader={
          <Typography style={{ fontSize: "14px", fontWeight: "500", marginLeft: "-5px" }}>
            2023년 7월 3일
         </Typography>
        }
      />

      <Typography
        variant="body1"
        color="text.primary"
        style={{ fontSize: "15px", marginBottom: "5%", marginTop: "1%", fontWeight: "500" }}
      >
        좋은 책과 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를 나누는 것과 같다. -데카르트-
      </Typography>
      <Link to="/detail">
        <CardMedia
          component="img"
          height="450"
          src={image}
          alt="Paella dish"
          sx={{ height: { xs: "18%", sm: "13%", md: "9%", lg: "7.5%", xl: "5%" }, borderRadius: "4%", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        />
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="FavoriteBorderRounded" style={{ marginLeft: "-2%" }}>
          <FavoriteBorderRoundedIcon />
          <Typography variant="body2" color="text.primary" style={{ marginLeft: "0.5rem" }}>
            {likeCount}
          </Typography>
        </IconButton>
        <IconButton aria-label="ChatBubbleOutlineRounded" style={{ marginLeft: "15%" }}>
          <ChatBubbleOutlineRoundedIcon />
          <Typography variant="body2" color="text.primary" style={{ marginLeft: "0.5rem" }}>
            {commentCount}
          </Typography>
        </IconButton>
        <IconButton aria-label="RemoveRedEyeOutlined" style={{ marginLeft: "15%" }}>
          <RemoveRedEyeOutlinedIcon />
        </IconButton>
        <Typography variant="body2" color="text.primary" style={{ marginLeft: "0.5rem" }}>
          {viewCount}
        </Typography>
        <IconButton aria-label="ShareOutlined" style={{ marginLeft: "15%" }}>
          <ShareOutlinedIcon />
        </IconButton>

        <ExpandMore
          expand={expanded[0]}
          onClick={() => handleExpandClick(0)}
          aria-expanded={expanded[0]}
          aria-label="자세히 보기"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="body3" color="text.primary" style={{ fontSize: '15px', fontWeight: "500" }}>
            돌을 놓고 본다 초면인 돌을 사흘 걸러 한 번 같은 말을 낮게 반복해 돌 속에 넣어본다 처음으로 오늘에 웃으시네
            소금 같은 싸락눈도 흩날리게 조금 돌 속에 넣어본다. 돌을 놓고 본다 초면인 돌을 사흘 걸러 한 번 같은 말을 낮게 반복해 돌 속에 넣어본다 처음으로 오늘에 웃으시네
            소금 같은 싸락눈도 흩날리게 조금 돌 속에 넣어본다.
          </Typography>
        </CardContent>
      </Collapse>
   </Card>
  );
}