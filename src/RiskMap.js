import Global from './GlobalVariables';
import * as React from 'react';
import Button from '@mui/material/Button';

import { Dialog, DialogTitle } from '@mui/material';
import TerritoryDetail from './SimpleDialog';

class Territory extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log("rendering")
        return (
            <TerritoryDetail buttonDisplayMessage={this.props.name}
                textMessage={JSON.stringify(this.props)}
                color = {this.props.ownerName}
                id = {this.props.id}
            ></TerritoryDetail>
        )
    }
}

class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log("map rendering");
        return (
            Object.entries(Global.TERRITORIES).map(([name, properties],index) => (
                <Territory
                    key={name}
                    name={name}
                    ownerName={properties.ownerName}
                    neighbors={properties.neighbors}
                    troop={properties.troop}
                    id = {"territory-T"+index}
                    
                />
            ))
        );
    }
}
class Player extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
            return (
                Object.entries(Global.PLAYERS).map(([name,properties])=>(
                    <div id={name+'player-display'}>
                        <p id = {name+'player-name'}>{name}</p>
                        <p id = {name+'player-food-points'}>food points: {properties.foodPoints}</p>
                        <p id = {name+'player-tech-points'}>tech points: {properties.techPoints}</p>
                        <p id = {name+'player-tech-level'}>tech level: {properties.techLevel}</p>
                    </div>
                ))
            )

    }
}
class UserInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div><p>Your name is:{Global.USER_NAME}</p></div>
        )
    }
}
export {
    Map,
    Player,
    UserInfo
}