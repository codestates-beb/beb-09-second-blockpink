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
  const [expanded, setExpanded] = useState({});
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    fetch("https://api.example.com/viewCount")
      .then((response) => response.json())
      .then((data) => setViewCount(data.count))
      .catch((error) => console.error(error));
  }, []);

  const handleExpandClick = (cardIndex) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [cardIndex]: !prevExpanded[cardIndex],
    }));
  };

  return (
    <Card sx={{ maxWidth: "40%", marginTop: "7.5%", marginBottom: "2%" }}>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src="/profileimage.jpg" />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="블록핑크"
        subheader="2023년 7월 3일"
      />
      <Link to="/detail">
        <CardMedia
          component="img"
          height="450"
          image="/picture1.jpg"
          alt="Paella dish"
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="#000">
          좋은 책과 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를
          나누는 것과 같다. -데카르트-
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
        <Typography
          variant="body2"
          color="#000"
        >{`조회수: ${viewCount}`}</Typography>
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
        sx={{ height: "auto" }}
      >
        <CardContent>
          <Typography paragraph variant="body3" color="#000">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
