import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MainPage() {
  const [expanded, setExpanded] = useState(false);
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    fetch('https://api.example.com/viewCount')
      .then((response) => response.json())
      .then((data) => setViewCount(data.count))
      .catch((error) => console.error(error));
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Card sx={{ maxWidth: '35%', marginBottom: '2%' }}>
        <CardHeader
          avatar={
            <Avatar alt="Remy Sharp" src="/profileimage.jpg" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="블록핑크"
          subheader="2023년 7월 3일"
        />
        <CardMedia
          component="img"
          height='400'
          image="/picture1.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="#000" >
            좋은 책과 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를 나누는 것과 같다.  -데카르트-
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
          <Typography variant="body2" color="#000" >{`조회수: ${viewCount}`}</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="자세히 보기"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ height: 'auto' }}>
          <CardContent>
            <Typography paragraph variant="body3" color="#000" >
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card sx={{ maxWidth: '35%' }}>
        <CardHeader
          avatar={
            <Avatar alt="Remy Sharp" src="/profileimage.jpg" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="블록핑크"
          subheader="2023년 7월 3일"
        />
        <CardMedia
          component="img"
          height='400'
          image="/picture1.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="#000" >
            좋은 책과 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를 나누는 것과 같다.  -데카르트-
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
          <Typography variant="body2" color="#000" >{`조회수: ${viewCount}`}</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="자세히 보기"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ height: 'auto' }}>
          <CardContent>
            <Typography paragraph variant="body3" color="#000" >
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}