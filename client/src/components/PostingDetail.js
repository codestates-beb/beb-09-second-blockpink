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

export default function PostingDetail({ post }) {
  const [expanded, setExpanded] = useState({ 0: true });
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [image, setImage] = useState("");
  const [isImageClicked, setIsImageClicked] = useState(false);

  useEffect(() => {
    fetchAvatar();
  }, []);

  const fetchAvatar = async () => {
    try {
      const response = await fetch("https://api.unsplash.com/photos/random?client_id=gmMEtxOLtydYvjbI_SWI8InO7S9y5rdAlBX7DcwVC4g");
      if (response.ok) {
        const avatarData = await response.json();
        const avatarUrl = avatarData.urls.regular;
        setImage(avatarUrl);
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle fetch error
    }
  };

  const handleCardClick = () => {
    if (!isImageClicked) {
      setViewCount((prevCount) => prevCount + 1);
      setIsImageClicked(true);
    }
  };

  const handleExpandClick = (cardIndex) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [cardIndex]: !prevExpanded[cardIndex],
    }));
  };

  const getTimeAgo = (dateString) => {
    const currentDate = new Date();
    const targetDate = new Date(dateString);

    const timeDiff = currentDate - targetDate;
    const secondsDiff = Math.floor(timeDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);

    if (hoursDiff < 24) {
      return `${hoursDiff}시간 전`;
    } else {
      const daysDiff = Math.floor(hoursDiff / 24);
      return `${daysDiff}일 전`;
    }
  };

  const formattedTimeAgo = getTimeAgo(post.createdAt);
  const formattedCreatedAt = post.createdAt ? post.createdAt.split("T")[0] : "";

  return (
    <Card
      sx={{
        width: "50%",
        marginTop: { xs: "18%", sm: "13%", md: "9%", lg: "7.5%", xl: "5%" },
        marginBottom: "2%",
        boxShadow: "none",
        backgroundColor: "#f9f9f9",
      }}
      onClick={handleCardClick}
    >
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={image} sx={{ marginLeft: "-14px" }} />
        }
        action={
          <IconButton aria-label="settings" style={{ marginLeft: "55%" }}>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <span>
            <Typography
              variant="h8"
              component="div"
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                marginLeft: "-5px",
                display: "inline",
              }}
            >
              {post.nickname}
            </Typography>
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: 400,
                position: "relative",
                top: "-1.5px",
                marginLeft: "1.5%",
                color: "gray",
                display: "inline",
              }}
            >
              {formattedTimeAgo}
            </Typography>
          </span>
        }
        subheader={
          <Typography
            style={{ fontSize: "14px", fontWeight: "500", marginLeft: "-5px" }}
          >
            {formattedCreatedAt}
          </Typography>
        }
      />

      <Typography
        variant="body1"
        color="text.primary"
        style={{
          fontSize: "15px",
          marginBottom: "5%",
          marginTop: "1%",
          fontWeight: "500",
        }}
      >
        {post.title}
      </Typography>
      <CardMedia
        component="img"
        height="450"
        src={image}
        alt="Paella dish"
        sx={{
          height: { xs: "18%", sm: "13%", md: "9%", lg: "7.5%", xl: "5%" },
          borderRadius: "4%",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      />

      <CardActions disableSpacing>
        <IconButton
          aria-label="FavoriteBorderRounded"
          style={{ marginLeft: "-2%" }}
        >
          <FavoriteBorderRoundedIcon />
          <Typography
            variant="body2"
            color="text.primary"
            style={{ marginLeft: "0.5rem" }}
          >
            {likeCount}
          </Typography>
        </IconButton>
        <IconButton
          aria-label="ChatBubbleOutlineRounded"
          style={{ marginLeft: "15%" }}
        >
          <ChatBubbleOutlineRoundedIcon />
          <Typography
            variant="body2"
            color="text.primary"
            style={{ marginLeft: "0.5rem" }}
          >
            {commentCount}
          </Typography>
        </IconButton>
        <IconButton
          aria-label="RemoveRedEyeOutlined"
          style={{ marginLeft: "15%" }}
        >
          <RemoveRedEyeOutlinedIcon />
        </IconButton>
        <Typography
          variant="body2"
          color="text.primary"
          style={{ marginLeft: "0.5rem" }}
        >
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
          <Typography
            paragraph
            variant="body3"
            color="text.primary"
            style={{ fontSize: "15px", fontWeight: "500" }}
          >
            {post.content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}