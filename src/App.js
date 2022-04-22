import './App.css';
import {Box, Grid, Paper, SelectChangeEvent, styled} from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import React, {useState} from "react";
import ControlPanel from "./control/ControlPanel";
// import HexMap from './HexMap';
import Global from './GlobalVariables';

const App = () => {
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
        console.log(commitRequest);
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
                        <FastfoodIcon/>
                        =3
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <FastfoodIcon/>
                        {Global.PLAYERS[Global.USER_NAME]!=null?Global.PLAYERS[Global.USER_NAME].foodPoints:0}
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={8}>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <React.Fragment>
                            <ControlPanel onSaveOrder={addOrder}/>
                            <section>
                                <h3>Created Orders!</h3>
                                {renderedOrders}
                            </section>
                        </React.Fragment>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;