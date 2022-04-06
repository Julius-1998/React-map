import Global from './GlobalVariables';
import * as React from 'react';
import Button from '@mui/material/Button';

import { Dialog, DialogTitle } from '@mui/material';
import TerritoryDetail from './SimpleDialog';

class Territory extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            ownerName : "",
            soldierNum : 0,
            neighbours: [],
        }
        
    }
    
    render(){
        return (
            <>
            <p id = {"territory-"+this.props.name} className = "territory" onClick={this.handleDisplay}>{this.props.name}{this.props.owner}</p>
            <TerritoryDetail buttonDisplayMessage= {this.props.name} 
                textMessage = {JSON.stringify(this.state)}
            ></TerritoryDetail>
            </>
        )
    }
}

class Map extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        console.log(Global.territories)
        return (
            Object.entries(Global.territories).map(([name,properties])=>(
                <Territory name = {name} 
                    owner = {properties.owner}
                    num = {properties.num}
                />
            ))
        );
    }
}
class Unit extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            property : "",
        }
    }
}
export{
    Map
}