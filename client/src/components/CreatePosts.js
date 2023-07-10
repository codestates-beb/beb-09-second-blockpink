import * as React from "react";
import { useState, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/system";

import { UserContext } from "./Context/UserContext";

// api
import { registerPosting } from "../api/post-register-posting";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
  marginLeft: theme.spacing(2),
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "김블록",
  "이블록",
  "박블록",
  "최블록",
  "양블록",
  "김해킹",
  "이해킹",
  "박블록",
  "최블록",
  "양해킹",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CreatePosts() {
  const { user, setUser } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [alignment, setAlignment] = useState("left");
  const [formats, setFormats] = useState(() => ["italic"]);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await registerPosting(title, content, user.accessToken);
    alert(`${result.message} | total SWT acquired: ${result.reward}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        mt: -1,
        ml: "auto",
        mr: "auto",
        width: "85%",
        height: "64vh",
        "@media (min-width: 767px)": {
          ml: "22%",
          mr: "auto",
          justifyContent: "center",
          width: "90%",
          height: "100vh",
        },
        "@media (max-width: 766px)": {
          ml: "22%",
          mr: "auto",
          justifyContent: "center",
          width: "90%",
          height: "100vh",
        },
      }}
    >
      <Box
        component="h2"
        sx={{
          fontWeight: '800',
          fontFamily: "Nanum Myeongjo, Arial, sans-serif",
          fontSize: { xl: '50px', md: '45px', sm: '35px', xs: '30px' },
          my: 2,
          marginTop: "5%",
          marginLeft: { xl: '16.5%', md: '18%', sm: '16%', xs: '11.5%' },
        }}
      >
        Create Posts
      </Box>
      <Divider sx={{ width: "60%", my: 1, backgroundColor: "#d3d3d3" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <TextField
          label="제목"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          margin="normal"
          required
          sx={{
            width: "29%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "20px",
            },
          }}
        />
        <FormControl
          sx={{
            mt: 1,
            width: "29.6%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "20px",
            },
          }}
        >
          <InputLabel htmlFor="grouped-native-select">카테고리</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Grouping"
          >
            <option aria-label="None" value="" />
            <optgroup label="Category 1">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
            </optgroup>
            <optgroup label="Category 2">
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
            </optgroup>
          </Select>
        </FormControl>
      </Box>
      <Divider sx={{ width: "60%", my: 2, backgroundColor: "#d3d3d3" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 0,
          width: "60%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "-2%",
          }}
        >
          <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "-3%",
          }}
        >
          <StyledToggleButtonGroup
            size="small"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value="color" aria-label="color" disabled>
              <FormatColorFillIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Box>
      </Box>
      <TextField
        label="내용"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        margin="normal"
        required
        multiline
        rows={13}
        sx={{
          width: "60%",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "20px",
          },
        }}
      />
      <Divider sx={{ width: "60%", my: 2, backgroundColor: "#d3d3d3" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          width: "60%",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            width: "50%",
            height: 55,
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#ff006c',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.4)',
            borderRadius: '20px',
            '&:hover': { backgroundColor: '#BE3455' },
          }}
        >
          생성
        </Button>
        <FormControl
          sx={{
            mt: 2,
            width: "50%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "20px",
            },
          }}
        >
          <InputLabel id="demo-multiple-chip-label">태그</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
