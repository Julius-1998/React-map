import {Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React from "react";
import AttackOrderForm from "../order/AttackOrderForm";
import {Folder} from "@mui/icons-material";


const ControlPanel = (props) => {

    const [orderType, setOrderType] = React.useState(-1);
    const handleSelection = (event: SelectChangeEvent) => {
        setOrderType(event.target.value);
    };
    const addOrder = (order) => {
        props.onSaveOrder(order);
        setOrderType(-1);
    }
    return (
        <div>
            <p>Create your orders here!</p>
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
                        <MenuItem value={6}>Poisson Order</MenuItem>
                        <MenuItem value={7}>Burn Food Order</MenuItem>
                        <MenuItem value={8}>Degenerate Order</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box m={1}>
                {orderType === 3 ? <AttackOrderForm onSaveOrder={addOrder}/> : null }
            </Box>
        </div>
    );
};

export default ControlPanel;