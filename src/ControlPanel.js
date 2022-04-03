import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import board_image from './board_demo.jpg'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import territoryNames from './App'
import Constants from './Constants';
import { SelectChangeEvent } from '@mui/material/Select';

const theme = createTheme();

function Copyright(props) {
    return (
        <p></p>
    );
  }
function Order(props){
    var formData = new FormData();
    const [from, setFrom] = React.useState('');
    const [to,setTo] = React.useState('');
    const handleFrom = (event) => {
        setFrom(event.target.value);
        formData.append("from",event.target.value)
        for (var [key, value] of formData.entries()) { 
            console.log(key, value);
        }    
    };
    const handleTo = (event) =>{
        setTo(event.target.value);
        formData.append("to",event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const target = event.target;
        console.log(formData)

        for (var [key, value] of formData.entries()) { 
            console.log(key, value);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={from}
                label="from"
                onChange={handleFrom}
                id ="order-from"
                select
            >
            {Constants.TERRYTORY_NAMES.map((name)=>(
                <MenuItem key = {name} value = {name}>{name}</MenuItem>
            ))}
            </TextField>
            <TextField
                value = {to}
                label = "to"
                onChange={handleTo}
                id = "order-to"
                select
            >
            {Constants.TERRYTORY_NAMES.map((name)=>(
                <MenuItem key = {name} value = {name}>{name}</MenuItem>
            ))}
            </TextField>
            <Button type='submit'>Submit!</Button>
        </form>
    );
}

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(event.currentTarget);
    console.log(data)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${board_image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}> */}
              <Order></Order>
              
        
              
            {/* </Box> */}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}