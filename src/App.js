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
        this.fetchInitMessage();
        this.state = {
            round: 0
        }
    }
    updateMap = (json) => {
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
            "PoisonOrder": [],
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
                            "unitNum": c.units[unitIndex].num,
                            "unitLevel": c.units[unitIndex].level,
                            "actionCategory": c.type
                        })
                    }
                    break;
                case ("AttackOrder"):
                    for (var unitIndex = 0; unitIndex < c.units.length; unitIndex++) {
                        orders["order"].push({
                            "origin": c.origin,
                            "target": c.target,
                            "unitNum": c.units[unitIndex].num,
                            "unitLevel": c.units[unitIndex].level,
                            "actionCategory": c.type
                        })
                    }
                    break;
                case ("TechUpgradeOrder"):
                    orders["UpgradeTechOrder"].push({
                        "targetLevel": commitRequest[i].targetLevel
                    })
                    break;
                case ("UnitsUpgradeOrder"):
                    orders["UpgradeUnitsOrder"].push({
                        "source": c.source,
                        "originalLevel": c.originalLevel,
                        "targetLevel": c.targetLevel,
                        "unitNum": c.unitNum
                    })
                    break;
                case ("BurnFoodOrder"):
                    orders["BurnFoodOrder"].push({

                    })
                    break;
                case ("PoisonOrder"):
                    orders["PoisonOrder"].push({
                        target: c.target
                    })
                    break;
                case ("DegenerateOrder"):
                    orders["DegenerateOrder"].push({

                    })
                    break;
                case ("NuclearWeaponOrder"):
                    orders["NuclearBombOrder"].push({
                        target: c.target
                    })
                    break;





            }
        }
        console.log("sending message to server")
        console.log(orders);
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                orders
            )
        };
        fetch('/submit/' + Global.USER_NAME, request)
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        console.log(json);
                        this.handleServerMessage(json)
                    });
                }
            });
    }
    handleServerMessage(json) {
        if (json.status === "WAITING") {
            const fetchStatusInfo = async (id) => {
                const statusRes = await fetch('/status');
                const statusResJson = await statusRes.json();
                if (statusResJson === "COMPLETED") {
                    fetchMapInfo(id);
                }
            }
            const fetchMapInfo = async (id) => {
                console.log("mapinfo");
                const mapRes = await fetch('/gameupdate');
                const mapResJson = await mapRes.json();
                this.updateMapProps(mapResJson);
                clearInterval(id);
            }
            const id = setInterval(() => {
                fetchStatusInfo(id);
            }, 1000);
        } else if (json.status === "COMPLETED") {
            fetch('/gameupdate', { method: 'GET' })
                .then(response => response.json())
                .then(data => { this.updateMapProps(data) });

            console.log("The status is completed now")
        } else if (json.status === "ERROR") {
            alert("Error occured, no update will be excecuted!" + json.errMessage);
        } else if (json.status === "GAMEOVER") {
            alert("Game is over, winner is" + json.winner);
        }
    }
    updateMapProps(json) {
        console.log("----------------------update map");
        console.log(json);
        if (json.status === "ERROR") {
            alert("Error occured, no update will be excecuted!" + json.errMessage);
        } else if (json.status === "GAMEOVER") {
            alert("Game is over, winner is" + json.winner);
        }
        this.updateMap(json.riskMap);
    }

}
export default App