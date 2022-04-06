import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Constants from './Constants';
import Global from './GlobalVariables';
class UpgradeTechOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            targetLevel: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMessage(this.state);
        
        console.log("Adding UpgradeTechOrder!");
        console.log(this.state);
    }
    handleChange = (event) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value.toString();
        this.setState({ [name]: value })
    }
    render() {
        return (
            <Box component="form" onSubmit={this.handleSubmit} noValidate autoComplete="off">

                <TextField
                    value={this.state.targetLevel}
                    name="targetLevel"
                    id="upgrade-territory-targetLevel"
                    onChange={this.handleChange}
                    type="number"
                />
                <Button type="submit">submit!</Button>
            </Box>
        )
    }
}
class UpgradeUnitsOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: "",
            originalLevel: 0,
            targetLevel: "",
            unitNum: 0
        }
    }
    handleChange = (event) => {
        event.preventDefault()
        const name = event.target.name;
        const value = event.target.value.toString();
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMessage(this.state);
        console.log("Adding UpgradeUnitsOrder!");
        console.log(this.state);
    }
    render() {
        return (
            <Box component="form" onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextField
                    value={this.state.source}
                    name="source"
                    id="upgrade-unit-source"
                    select
                    onChange={this.handleChange}
                >
                    {Object.entries(Global.TERRITORIES).map(([name, properties]) => (
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    value={this.state.originalLevel}
                    name="originalLevel"
                    id="upgrade-unit-originalLevel"
                    onChange={this.handleChange}
                    type="number"
                >
                </TextField>
                <TextField
                    value={this.state.targetLevel}
                    name="targetLevel"
                    id="upgrade-unit-targetLevel"
                    onChange={this.handleChange}
                    type="number"
                />
                <TextField
                    value={this.state.unitNum}
                    name="unitNum"
                    id="upgrade-unit-unitNum"
                    onChange={this.handleChange}
                    type="number"
                />
                <Button type="submit">submit!</Button>
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
            origin: "",
            target: "",
            unitNum: 0,
            unitLevel: 0,
            actionCategory:"",
            troop:{}
        }
    };
    handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value.toString();
        this.setState({ [name]: value })
        const unitLevel = this.state.unitLevel;
        const unitNum = this.state.unitNum;
        this.setState({troop:{[unitLevel]:unitNum}});
    }
   

    handleSubmit = (event) => {
        event.preventDefault();
        const state = this.state;
        const orderType = this.state.actionCategory;
        this.props.addMessage({[orderType]:state});
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
                    name="actionCategory"
                >
                    {Constants.ACTION_NAMES.map((name) => (
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    value={this.state.origin}
                    label="origin"
                    onChange={this.handleChange}
                    id="order-origin"
                    select
                    name="origin"
                >
                    {Object.entries(Global.TERRITORIES).map(([name, properties]) => (
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    value={this.state.target}
                    label="target"
                    onChange={this.handleChange}
                    id="order-target"
                    select
                    name="target"
                >
                    {Object.entries(Global.TERRITORIES).map(([name, properties]) => (
                        <MenuItem key={name} value={name}>{name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    value={this.state.unitNum}
                    label="unitNum"
                    onChange={this.handleChange}
                    id="order-unitNum"
                    type="number"
                    name="unitNum"
                />
                <TextField
                    value={this.state.unitLevel}
                    label="unitLevel"
                    onChange={this.handleChange}
                    id="order-unitLevel"
                    type="number"
                    name="unitLevel"
                />
                <Button type='submit'>Submit!</Button>
            </Box>
        );
    }
}
export {
    UpgradeTechOrder,
    UpgradeUnitsOrder,
    Order
}