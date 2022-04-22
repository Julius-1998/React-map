import './App.css';
import { Box, Grid, Paper, SelectChangeEvent, styled } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BiotechIcon from '@mui/icons-material/Biotech';
import React, { useState } from "react";
import ControlPanel from "./control/ControlPanel";
import HexMap from './HexMap';
import Global from './GlobalVariables';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import RiskPage from './RiskPage';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleServerMessage = this.handleServerMessage.bind(this);
        this.fetchInitMessage();
        this.state = {
            round: 0
        }
    }
    handleServerMessage = (json) => {
        Global.TERRITORIES = json.territories;
        Global.PLAYERS = json.players;
        this.setState({ round: ++this.state.round });
    }
    handleInitMessage = (json) => {
        Global.TERRITORIES = json.riskMap.territories;
        Global.PLAYERS = json.riskMap.players;
        Global.USER_NAME = json.player;
        this.setState({ round: ++this.state.round });
    }
    async fetchInitMessage() {
        const request = {
            method: 'GET',
        }
        const response = await fetch('/init', request);
        const json = await response.json()
        this.handleInitMessage(json);
    }
    render(){
        return(
            <RiskPage></RiskPage>
        )
    }

}
export default App