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
                    label = "targetLevel"
                    style = {{width: 100}}
                    required
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
            targetLevel: 0,
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
                    label = "source"
                    onChange={this.handleChange}
                    style = {{width: 100}}
                    required
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
                    lable = "originalLevel"
                    labelId = "upgrade-unit-label-originalLevel"
                    style = {{width: 100}}
                    required
                >
                </TextField>
                <TextField
                    value={this.state.targetLevel}
                    name="targetLevel"
                    id="upgrade-unit-targetLevel"
                    onChange={this.handleChange}
                    type="number"
                    label = "targetLevel"
                    style = {{width: 100}}
                    required
                />
                <TextField
                    value={this.state.unitNum}
                    name="unitNum"
                    id="upgrade-unit-unitNum"
                    onChange={this.handleChange}
                    type="number"
                    label = "unitNum"
                    style = {{width: 100}}
                    required
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
        }
    };
    handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value.toString();
        this.setState({ [name]: value })
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
                    name="actionCategory"
                    style = {{width: 100}}
                    required

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
                    style = {{width: 100}}
                    required
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
                    style = {{width: 100}}
                    required
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
                    style = {{width: 100}}
                    required
                    InputProps={{ inputProps: { min: 0, max: 10 } }}

                />
                <TextField
                    value={this.state.unitLevel}
                    label="unitLevel"
                    onChange={this.handleChange}
                    id="order-unitLevel"
                    type="number"
                    name="unitLevel"
                    style = {{width: 100}}
                    required
                    InputProps={{ inputProps: { min: 0, max: 10 } }}

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