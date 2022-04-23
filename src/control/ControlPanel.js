import {Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import AttackOrderForm from "../order/AttackOrderForm";
import TechUpgradOrderForm from "../order/TechUpgradOrderForm";
import UnitsUpgradeOrderForm from "../order/UnitsUpgradeOrderForm";
import MoveOrderForm from "../order/MoveOrderForm";
import NuclearWeaponOrderForm from "../order/NuclearWeaponOrderForm";
import PoissonOrderForm from "../order/PoissonOrderForm";
import BurnFoodOrderForm from "../order/BurnFoodOrderForm";
import DegenerateOrder from "../order/DegenerateOrder";
import { Button } from "@mui/material";


const ControlPanel = (props) => {

    const [orderType, setOrderType] = React.useState(-1);
    const [commitStatus, setCommmitStatus] = useState(true);
    const handleSelection = (event) => {
        setOrderType(event.target.value);
        setCommmitStatus(false);
    };
    const addOrder = (order) => {
        props.onSaveOrder(order);
        setOrderType(-1);
        setCommmitStatus(true);
    }
    let orderComponent = null;
    switch (orderType) {
        case -1:
            orderComponent = null;
            break;
        case 1:
            orderComponent = <TechUpgradOrderForm onSaveOrder={addOrder}/>;
            break;
        case 2:
            orderComponent = <UnitsUpgradeOrderForm onSaveOrder={addOrder}/>;
            break;
        case 3:
            orderComponent = <AttackOrderForm onSaveOrder={addOrder}/>;
            break;
        case 4:
            orderComponent = <MoveOrderForm onSaveOrder={addOrder}/>;
            break;
        case 5:
            orderComponent = <NuclearWeaponOrderForm onSaveOrder={addOrder}/>;
            break;
        case 6:
            orderComponent = <PoissonOrderForm onSaveOrder={addOrder}/>;
            break;
        case 7:
            orderComponent = <BurnFoodOrderForm onSaveOrder={addOrder}/>;
            break;
        case 8:
            orderComponent = <DegenerateOrder onSaveOrder={addOrder}/>;
            break;
    }
    return (
        <section>
            <h3>Create your orders here!</h3>
            <Box m={1}>
                <FormControl fullWidth>
                    <InputLabel id={"order-type-prompt-label"}>Order Type</InputLabel>
                    <Select
                        labelId={"order-type-prompt-label"}
                        id={"order-type-selection"}
                        value={orderType}
                        label={"orderType"}
                        onChange={handleSelection}
                    >
                        <MenuItem value={1}>Tech Level Upgrade Order</MenuItem>
                        <MenuItem value={2}>Unit Level Upgrade Order</MenuItem>
                        <MenuItem value={3}>Attack Order</MenuItem>
                        <MenuItem value={4}>Move Order</MenuItem>
                        <MenuItem value={5}>Nuclear Bomb Order</MenuItem>
                        <MenuItem value={6}>Poison Order</MenuItem>
                        <MenuItem value={7}>Burn Food Order</MenuItem>
                        <MenuItem value={8}>Degenerate Order</MenuItem>
                    </Select>
                    {commitStatus ? <Button onClick={props.onSubmitRequest} variant={"Outlined"} fullWidth>Submit Request</Button> : null}
                </FormControl>
            </Box>
            <Box m={1}>
                {orderComponent}
            </Box>
        </section>
    );
};

export default ControlPanel;