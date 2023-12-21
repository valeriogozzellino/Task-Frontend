import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import "../style/Home.css";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '20px 26px 15px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        
    },
  },
}));

export default function SelectionNumber({ value, onInputChange }) {
  console.log("input == ", value)
    return (
        <div >
            <FormControl sx={{ m: 2 }} variant="standard">
                <InputLabel htmlFor="demo-customized-textbox">Number</InputLabel>
                <BootstrapInput id="" onChange={(e) => onInputChange(e.target.value)} value={value} />
            </FormControl>
        </div>
    );
}
