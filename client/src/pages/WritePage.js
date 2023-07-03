import * as React from 'react';
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
  '김블록',
  '이블록',
  '박블록',
  '최블록',
  '양블록',
  '김해킹',
  '이해킹',
  '박블록',
  '최블록',
  '양해킹',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("제목: ", title);
    console.log("내용: ", content);
    console.log("칩: ", personName);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        mt: 5,
        ml: 5
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <TextField
          label="제목"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          margin="normal"
          required
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-native-select">카테고리</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Grouping">
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
      <TextField
        label="내용"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        margin="normal"
        required
        multiline
        rows={10}
        sx={{ width: '50%' }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, minWidth: 200 }}>
        생성
      </Button>
      <FormControl sx={{ mt: 2, width: 200 }}>
          <InputLabel id="demo-multiple-chip-label">태그</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
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
  );
}