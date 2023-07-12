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
  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState("");
  const [expandedWidth, setExpandedWidth] = useState("auto");
  const [post, setPost] = useState({});

  useEffect(() => {
    getPosting(id)
      .then((res) => {
        const createdDate = new Date(res.post.createdAt);
        const updatedDate = new Date(res.post.updatedAt);

        const formattedCreatedAt = createdDate.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        const timeAgo = getTimeAgo(updatedDate);

        setPost({
          nickname: res.nickname,
          title: res.post.title,
          content: res.post.content,
          createdAt: formattedCreatedAt,
          updatedAt: timeAgo,
        });

        fetchAvatarImage();
        fetchPostImage();
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  const fetchAvatarImage = () => {
    const avatarUrl = "https://i.pravatar.cc/300";
    setAvatar(avatarUrl);
  };

  const fetchPostImage = () => {
    const imageUrl = "https://source.unsplash.com/random";
    setImage(imageUrl);
  };

  const handleExpandClick = (cardIndex) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [cardIndex]: !prevExpanded[cardIndex],
    }));
    setExpandedWidth((prevWidth) => (prevWidth === "auto" ? "100%" : "auto"));
  };

  const getTimeAgo = (date) => {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate - date);
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

    if (hoursDiff < 24) {
      return `${hoursDiff}시간 전`;
    } else {
      const daysDiff = Math.floor(hoursDiff / 24);
      return `${daysDiff}일 전`;
    }
  };

  const handleCardClick = () => {
    setViewCount((prevCount) => prevCount + 1);
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
      onClick={handleCardClick}
    >
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={avatar} />}
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
                fontWeight: 600,
                marginTop: "0.32%",
                marginLeft: "1.5%",
                color: "gray",
              }}
            >
              {post.updatedAt}
            </Typography>
          </div>
        }
        subheader={
          <Typography
            variant="body2"
            component="div"
            style={{ fontWeight: "550" }}
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