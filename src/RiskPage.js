import './App.css';
import {Box, Grid, Paper, SelectChangeEvent, styled} from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BiotechIcon from '@mui/icons-material/Biotech';
import PeopleIcon from '@mui/icons-material/People';
import React, {useState} from "react";
import ControlPanel from "./control/ControlPanel";
import HexMap from './HexMap';
import Global from './GlobalVariables';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { DataObjectSharp } from '@mui/icons-material';
const updateRiskMap =(order)=>{
    console.log(order)
    switch(order.type){
        case'AttackOrder':
            console.log(order)
            order.units.map((singleOrder)=>(
                updateUnit(order.origin,singleOrder.level,- parseInt(singleOrder.num,10))
            ))
        case'MoveOrder':
        
    }
    // console.log("end updaing map")
}
const updateUnit = (territoryName, unitLevel,variation) =>{
    Global.TERRITORIES[territoryName]["troop"]["units"][Global.LEVELMAP[unitLevel]] += variation;

}
const RiskPage = () => {
    // commit request is a list of orders
    const [commitRequest, setCommitRequest] = useState([]);
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFFF',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const addOrder = (order) => {
        setCommitRequest([...commitRequest, order]);
        updateRiskMap(order);
        // console.log(commitRequest);
    }
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>
                        <PeopleIcon/>
                        {Global.USER_NAME}
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <FastfoodIcon/>
                        {Global.PLAYERS[Global.USER_NAME]!=null?Global.PLAYERS[Global.USER_NAME].foodPoints:0}
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <BiotechIcon/>
                        {Global.PLAYERS[Global.USER_NAME]!=null?Global.PLAYERS[Global.USER_NAME].techPoints:0}
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <MilitaryTechIcon/>
                        {Global.PLAYERS[Global.USER_NAME]!=null?Global.PLAYERS[Global.USER_NAME].techLevel:0}
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <HexMap></HexMap>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <ControlPanel onSaveOrder={addOrder}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RiskPage;