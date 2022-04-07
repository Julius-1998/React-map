import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import board_image from './board_demo.jpg'
import Global from './GlobalVariables';
import { Order, UpgradeUnitsOrder, UpgradeTechOrder } from './Upgrades';
import { Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Map,Player } from './RiskMap';
import { flushSync } from 'react-dom';
import { ReactSession } from 'react-client-session';
const theme = createTheme();
ReactSession.setStoreType("localStorage");

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
    }
    handleServerMessage(json) {
        if(json.status === "WAITING"){
            //if is waiting, call /status periodically
            setInterval(async () => {
                const res = await fetch('/status');
                const responseJson = await res.json();
                if(responseJson.status === "COMPLETED"){
                    //call gameupdate now
                    clearInterval();
                }
              }, 10000);
        }else if(json.status === "COMPLETED"){
            //if is completed, call gameupdate
        }

        // this.props.applyServerMessage(json);
    }
    updateMapProps(json){
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
        fetch('/submit', request)
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

        var JsonMessage  = JSON.stringify({
            order: this.state.orderMessages,
            UpgradeTechOrder: this.state.upgradeTerritoryMessages,
            UpgradeUnitsOrder: this.state.upgradeUnitMessages
        });
        console.log(JsonMessage);
        return (
            <>
                <Container sx = {{width:'30%'}}>
                <Box sx={{ width: '30%' }}>{JsonMessage}</Box>
                </Container>
                <Order addMessage={(message) => { this.handleOrderMessage(message) }}></Order>
                <UpgradeTechOrder addMessage={(message) => { this.handleUpgradeTerritoryMessage(message) }}></UpgradeTechOrder>
                <UpgradeUnitsOrder addMessage={(message) => { this.handleUpgradeUnitMessage(message) }}></UpgradeUnitsOrder>
                <Button onClick={this.sendMessage}>Commit Messages</Button>
            </>
        )
    }

}
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.handleServerMessage = this.handleServerMessage.bind(this);
        this.fetchInitMessage();
        this.state = {
            round:0
        }
        
    }
    handleServerMessage = (json) => {
        Global.TERRITORIES = json.territories;
        Global.PLAYERS = json.players;
        this.setState({round:++this.state.round});
    
    }
    handleInitMessage = (json) =>{
        Global.TERRITORIES = json.riskMap.territories;
        Global.PLAYERS = json.riskMap.players;
        Global.USER_NAME = json.player;
        this.setState({round:++this.state.round});
        console.log("printing global state");
        console.log(Global);
        ReactSession.add("username",Global.USER_NAME);
        ReactSession.get("username");
    }
    async fetchInitMessage(){
        const request = {
            method: 'GET',
        }
        let response = await fetch('/init', request);
        let json =  await response.json()
        this.handleInitMessage(json);
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
                            <Player></Player>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    }
}
export default Game