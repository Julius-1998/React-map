import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import board_image from './board_demo.jpg'
import Global from './GlobalVariables';
import { Order, UpgradeTerritory, UpgradeUnit } from './Upgrades';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const theme = createTheme();

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleMessage(message) {
        this.state.messages.push(JSON.stringify(message));
        this.setState({ messages: this.state.messages });
    }
    sendMessage() {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.messages)
        };
        console.log(request)
        fetch('/testAPI', request)
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        console.log(json);
                        console.log(json.name);
                        console.log(json.test);
                        this.setState({ from: json.name })
                    });
                }
            });
        this.setState({messages:[]})

    }
    render() {
        const messageDisplay = this.state.messages.map((message, index) => <p key={index} >{message}</p>);
        return (
            <>
                <div>
                    {messageDisplay}
                </div>
                <Order addMessage={(message) => { this.handleMessage(message) }}></Order>
                <UpgradeTerritory addMessage={(message) => { this.handleMessage(message) }}></UpgradeTerritory>
                <UpgradeUnit addMessage={(message) => { this.handleMessage(message) }}></UpgradeUnit>
                <Button onClick={this.sendMessage}>Commit Messages</Button>
            </>
        )
    }

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
                        <Message></Message>



                        {/* </Box> */}
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}