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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../assets/logo.png";

import { getPosting } from "../api/get-posting";

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

export default function Posting({ id }) {
  const [expanded, setExpanded] = useState({});
  const [viewCount, setViewCount] = useState(0);
  const [image, setImage] = useState("");
  const [expandedWidth, setExpandedWidth] = useState("auto");
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

    setImage(logo);
  }, []);

  const handleExpandClick = (cardIndex) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [cardIndex]: !prevExpanded[cardIndex],
    }));
    setExpandedWidth((prevWidth) => (prevWidth === "auto" ? "100%" : "auto"));
  };

  const dummyData = {
    title: "블록핑크",
    subtitle: "7시간 전",
    date: "2023년 7월 3일",
    content:
      "좋은 책과 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를 나누는 것과 같다. -데카르트-",
    details:
      "돌을 놓고 본다 초면인 돌을 사흘 걸러 한 번 같은 말을 낮게 반복해 돌 속에 넣어본다 처음으로 오늘에 웃으시네 소금 같은 싸락눈도 흩날리게 조금 돌 속에 넣어본다. 돌을 놓고 본다 초면인 돌을 사흘걸러 한 번 같은 말을 낮게 반복해 돌 속에 넣어본다 처음으로 오늘에 웃으시네 소금같은 싸락눈도 흩날리게 조금 돌 속에 넣어본다.",
  };

  return (
    <Card
      sx={{
        width: "50%",
        height: { xs: "18%", sm: "13%", md: "9%", lg: "7.5%", xl: "5%" },
        marginTop: { xs: "18%", sm: "13%", md: "9%", lg: "7.5%", xl: "5%" },
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "2%",
        borderRadius: "25px",
      }}
    >
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={image} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <div style={{ display: "flex" }}>
            <Typography
              fontSize={15}
              component="div"
              style={{ fontWeight: 800 }}
            >
              {post.nickname}
            </Typography>
            <Typography
              fontSize={12}
              component="div"
              style={{
                fontWeight: 400,
                marginTop: "0.32%",
                marginLeft: "1.5%",
                color: "gray",
              }}
            >
              {dummyData.subtitle}
            </Typography>
          </div>
        }
        subheader={
          <Typography
            variant="body2"
            component="div"
            style={{ fontWeight: "500" }}
          >
            {post.createdAt}
          </Typography>
        }
      />
      <Link to={`/detail/${id}`}>
        <CardMedia component="img" height="450" src={image} alt="image" />
      </Link>
      <CardContent>
        <Typography
          variant="body2"
          color="text.primary"
          style={{ fontWeight: "500" }}
        >
          {post.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="Visibility">
          <VisibilityIcon />
        </IconButton>
        <Typography variant="body2" color="text.primary">
          {viewCount}
        </Typography>
        <ExpandMore
          expand={expanded[0]}
          onClick={() => handleExpandClick(0)}
          aria-expanded={expanded[0]}
          aria-label="자세히 보기"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        in={expanded[0]}
        timeout="auto"
        unmountOnExit
        sx={{ width: expandedWidth }}
      >
        <CardContent>
          <Typography
            paragraph
            variant="body2"
            color="text.primary"
            style={{ fontWeight: "500" }}
          >
            {post.content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
