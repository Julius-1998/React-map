import './App.css';
import { Box, Grid, Paper, SelectChangeEvent, styled } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BiotechIcon from '@mui/icons-material/Biotech';
import React, { useState } from "react";
import ControlPanel from "./control/ControlPanel";
// import HexMap from './HexMap';
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
    handleSubmitRequest = (commitRequest) => {
        this.sendMessage(commitRequest)
    }
    render() {
        return (
            <RiskPage onSubmitRequest={this.handleSubmitRequest}></RiskPage>
        )
    }
    sendMessage(commitRequest) {
        console.log(commitRequest);
        var orders = {
            "order": [],
            "UpgradeTechOrder": [],
            "UpgradeUnitsOrder": [],
            "BurnFoodOrder": [],
            "DegenerateOrder": [],
            "PoissonOrder": [],
            "NuclearBombOrder": []
        }
        for (var i = 0; i < commitRequest.length; i++) {
            const c = commitRequest[i]
            switch (commitRequest[i].type) {
                case ("MoveOrder"):
                    for (var unitIndex = 0; unitIndex < c.units.length; unitIndex++) {
                        orders["order"].push({
                            "origin": c.origin,
                            "target": c.target,
                            "unitNum": c.units[unitIndex].level,
                            "unitLevel": c.units[unitIndex].num,
                            "actionCategory": c.type
                        })
                    }
                    break;
                case("AttackOrder"):
                    for (var unitIndex = 0; unitIndex < c.units.length; unitIndex++) {
                        orders["order"].push({
                            "origin": c.origin,
                            "target": c.target,
                            "unitNum": c.units[unitIndex].level,
                            "unitLevel": c.units[unitIndex].num,
                            "actionCategory": c.type
                        })
                    }
                    break;
                case ("TechUpgradeOrder"):
                    orders["UpgradeTechOrder"].push({
                        "targetLevel": commitRequest[i].targetLevel
                    })
                    break;
                case("UnitsUpgradeOrder"):
                    orders["UpgradeUnitsOrder"].push({
                        "source":c.source,
                        "originalLevel":c.originalLevel,
                        "targetLevel":c.targetLevel,
                        "unitNum":c.unitNum
                    })
                    break;    
                case("BurnFoodOrder"):
                    orders["BurnFoodOrder"].push({

                    })
                    break;
                case("PoissonOrder"):
                    orders["PoissonOrder"].push({
                        target:c.target
                    })
                    break;
                case("DegenerateOrder"):
                    orders["DegenerateOrder"].push({

                    })
                    break;
                case("NuclearWeaponOrder"):
                    orders["NuclearBombOrder"].push({
                        target:c.target
                    })
                    break;

                



            }
        }
        console.log(orders);
        // const request = {
        //     method:'POST',
        //     headers:{'Content-Type':'application/json'},
        //     body:JSON.stringify(
        //         order:
        //         UpgradeTechOrder:
        //         UpgradeUnitsOrder:

        //     )
        // };
        // fetch('/submit')
    }

}
export default App