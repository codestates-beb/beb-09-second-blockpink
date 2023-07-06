import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import Button from '@mui/joy/Button';

export default function CommentCreate() {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = React.useState('');

  const addEmoji = (emoji) => {
    setText((prevText) => prevText + emoji);
  };

  const handleClick = () => {
    console.log('Box is clicked.');
  };

  return (
    <Box
      sx={{
        width: '50%',
        py: 0,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
        marginBottom: '10%',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
      }}
      onClick={handleClick}
    >
      <Textarea
        name="Outlined"
        placeholder="Leave a comment…"
        variant="outlined"
        minRows={3}
        value={text}
        onChange={(event) => setText(event.target.value)}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <IconButton variant="outlined" color="neutral" onClick={() => addEmoji('😁')}>
                😁
              </IconButton>
              <IconButton variant="outlined" color="neutral" onClick={() => addEmoji('🥹')}>
                🥹
              </IconButton>
              <IconButton variant="outlined" color="neutral" onClick={() => addEmoji('😘')}>
                😘
              </IconButton>
            </Box>
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ '--ListItemDecorator-size': '24px' }}
            >
              {['200', 'normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="sm" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
                  ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <Button
              sx={{
                ml: 'auto',
                fontSize: '13px',
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: 'white',
                '&:hover': {
                  color: '#ff006c',
                  backgroundColor: 'white',
                  transition: 'color 0.3s ease',
                },
              }}
            >
              Send
            </Button>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
      />
    </Box>
  );
}