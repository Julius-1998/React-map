import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Constants from './Constants';
import Global from './GlobalVariables';
class UpgradeTerritory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            territoryName: "",
            originalLevel: "",
            aimLevel: "",
            operatorName: Global.USER_NAME
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        this.props.addMessage(this.state);
    }
    handleChange=(event)=>{
        event.preventDefault();
    
        const name = event.target.name;
        const value = event.target.value.toString();
        this.setState({[name]:value})
    }
    render() {
        return (
            <Box component="form" onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextField
                    value={this.state.territoryName}
                    name="territoryName"
                    id="upgrade-territory-territoryName"
                    select
                    onChange={this.handleChange}
                >
                    {Constants.TERRYTORY_NAMES.map((name) => (
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    value={this.state.originalLevel}
                    name="originalLevel"
                    id="upgrade-territory-originalLevel"
                    onChange={this.handleChange}
                    type = "number"
                >
                </TextField>
                <TextField
                    value={this.state.aimLevel}
                    name="aimLevel"
                    id="upgrade-territory-aimLevel"
                    onChange={this.handleChange}
                    type = "number"
                    />
                <Button type = "submit">submit!</Button>
            </Box>
        )
    }
}
class UpgradeUnit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            territoryName: "",
            originalLevel: "",
            aimLevel: "",
            num:0,
            operatorName: Global.USER_NAME
        }
    }
    handleChange=(event)=>{
        event.preventDefault()
        const name = event.target.name;
        const value = event.target.value.toString();
        this.setState({[name]:value})
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        this.props.addMessage(this.state);
    }
    render() {
        return (
            <Box component="form" onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextField
                    value={this.state.territoryName}
                    name="territoryName"
                    id="upgrade-unit-territoryName"
                    select
                    onChange={this.handleChange}
                >
                    {Constants.TERRYTORY_NAMES.map((name) => (
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    value={this.state.originalLevel}
                    name="originalLevel"
                    id="upgrade-unit-originalLevel"
                    onChange={this.handleChange}
                    type = "number"
                >
                </TextField>
                <TextField
                    value={this.state.aimLevel}
                    name="aimLevel"
                    id="upgrade-unit-aimLevel"
                    onChange={this.handleChange}
                    type = "number"
                    />
                <Button type = "submit">submit!</Button>
            </Box>
        )
    }
    
}
class Order extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            from: "",
            to: "",
            actionCategory: "",
            num:0,
            operatorName: Global.USER_NAME
        }
    };
    handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value.toString();
        this.setState({[name]:value})
    }
       
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMessage(this.state);
    }
   
    render() {
        return (
            <Box component="form" onSubmit={this.handleSubmit}>
                 <TextField
                    value={this.state.actionCategory}
                    label="actionCategory"
                    onChange={this.handleChange}
                    id="order-actionCategory"
                    select
                    name = "actionCategory"
                >
                    {Constants.ACTION_NAMES.map((name) => (
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    value={this.state.from}
                    label="from"
                    onChange={this.handleChange}
                    id="order-from"
                    select
                    name = "from"
                >
                    {Constants.TERRYTORY_NAMES.map((name) => (
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    value={this.state.to}
                    label="to"
                    onChange={this.handleChange}
                    id="order-to"
                    select
                    name = "to"
                >
                    {Constants.TERRYTORY_NAMES.map((name) => (
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    value = {this.state.num}
                    label="Number"
                    onChange={this.handleChange}
                    id="order-num"
                    type = "number"
                    name = "num"
                    />
                <Button type='submit'>Submit!</Button>
            </Box>
        );
    }
}
export {
    UpgradeTerritory,
    UpgradeUnit,
    Order
}