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
import { Map } from './RiskMap';
import TerritoryDetail from './SimpleDialog';
const theme = createTheme();

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderMessages: [],
            upgradeTerritoryMessages: [],
            upgradeUnitMessages: [],
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.handleOrderMessage = this.handleOrderMessage.bind(this);
        this.handleUpgradeTerritoryMessage = this.handleUpgradeTerritoryMessage.bind(this);
        this.handleUpgradeUnitMessage = this.handleUpgradeUnitMessage.bind(this);
    }
    handleOrderMessage(message) {
        this.state.orderMessages.push(message);
        this.setState({ orderMessages: this.state.orderMessages });
    }
    handleUpgradeTerritoryMessage(message) {
        this.state.upgradeTerritoryMessages.push(message);
        this.setState({ upgradeTerritoryMessages: this.state.upgradeTerritoryMessages });
    }
    handleUpgradeUnitMessage(message) {
        this.state.upgradeUnitMessages.push(message);
        this.setState({ upgradeUnitMessages: this.state.upgradeUnitMessages });
        console.log(this.state);
    }
    handleServerMessage(json) {
        this.props.applyServerMessage(json);
    }
    sendMessage() {
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                order: this.state.orderMessages,
                upgradeTerritory: this.state.upgradeTerritoryMessages,
                upgradeUnit: this.state.upgradeUnitMessages
            })
        };
        fetch('/testAPI', request)
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        console.log(json);
                        this.handleServerMessage(json)
                    });
                }
            });
        this.setState({ orderMessages: [] });
        this.setState({ upgradeTerritoryMessages: [] });
        this.setState({ upgradeUnitMessages: [] });
    }
    render() {
        const messageDisplay =
            this.state.orderMessages.map((message, index) => <p key={index} >{message}</p>) +
            this.state.upgradeTerritoryMessages.map((message, index) => <p key={index} >{message}</p>) +
            this.state.upgradeUnitMessages.map((message, index) => <p key={index} >{message}</p>);
        return (
            <>
                <div>
                    {messageDisplay}
                </div>
                <Order addMessage={(message) => { this.handleOrderMessage(message) }}></Order>
                <UpgradeTerritory addMessage={(message) => { this.handleUpgradeTerritoryMessage(message) }}></UpgradeTerritory>
                <UpgradeUnit addMessage={(message) => { this.handleUpgradeUnitMessage(message) }}></UpgradeUnit>
                <Button onClick={this.sendMessage}>Commit Messages</Button>
            </>
        )
    }

}


class SignInSide extends React.Component {
    constructor(props) {
        super(props);
        this.handleServerMessage = this.handleServerMessage.bind(this);
        this.state ={

        }
    }
    handleServerMessage = (json) => {
        console.log("before update");
        console.log(Global.TERRITORIES);

        Global.TERRITORIES = json.territories;
        console.log("after Update");
        console.log(Global.TERRITORIES);
        this.setState(this.state);
    }
    render() {
        console.log("render method is called");
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
                    >
                        <Map></Map>
                    </Grid>
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
                            <Message applyServerMessage={(message) => (this.handleServerMessage(message))}></Message>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    }
}
export default SignInSide