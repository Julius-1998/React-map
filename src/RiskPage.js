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
            order.units.map((singleOrder)=>(
                updateUnit(order.origin,singleOrder.level,- parseInt(singleOrder.num,10))
            ))
            break;
        case'MoveOrder':
            order.units.map((singleOrder)=>(
                updateUnit(order.origin,singleOrder.level, - parseInt(singleOrder.num,10))
            ))
            order.units.map((singleOrder)=>(
                updateUnit(order.target,singleOrder.level, parseInt(singleOrder.num,10))
            ))
            break;
        case'TechUpgradeOrder':
            Global.PLAYERS[Global.USER_NAME]["techLevel"] = Global.LEVELMAP[parseInt(order.targetLevel)]
            break;
        case'UnitsUpgradeOrder':
            updateUnit(order.source,order.originalLevel,-parseInt(order.unitNum))
            updateUnit(order.source,order.targetLevel,parseInt(order.unitNum))
            break;
    }
    // console.log("end updaing map")
}
const updateUnit = (territoryName, unitLevel,variation) =>{
    
    Global.TERRITORIES[territoryName]["troop"]["units"][Global.LEVELMAP[unitLevel]] += variation;

}
const RiskPage = (props) => {
    // commit request is a list of orders
    const [commitRequest, setCommitRequest] = useState([]);
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFFFFF',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const onSubmitRequest = () => {
        props.onSubmitRequest(commitRequest);
        setCommitRequest([])
    }
    const addOrder = (order) => {
        setCommitRequest([...commitRequest, order]);
        updateRiskMap(order);
        // console.log(commitRequest);
    }
    const renderedOrders = commitRequest.map((order)=>(
        <article>
            <p>{JSON.stringify(order)}</p>
        </article>
    ))

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
                    <React.Fragment>
                        <ControlPanel onSaveOrder={addOrder} onSubmitRequest={onSubmitRequest}/>
                        <section>
                            <h3>Created Orders!</h3>
                            {renderedOrders}
                        </section>
                    </React.Fragment>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RiskPage;