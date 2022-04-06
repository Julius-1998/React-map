import Global from './GlobalVariables';
import * as React from 'react';
import Button from '@mui/material/Button';

import { Dialog, DialogTitle } from '@mui/material';
import TerritoryDetail from './SimpleDialog';

class Territory extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log("rendering")
        return (
            <TerritoryDetail buttonDisplayMessage= {this.props.name} 
                textMessage = {JSON.stringify(this.props)}
            ></TerritoryDetail>
        )
    }
}

class Map extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log("map rendering");
        return (
            Object.entries(Global.TERRITORIES).map(([name,properties])=>(
                <Territory 
                    key = {name}
                    name = {name} 
                    ownerName = {properties.ownerName}
                    soldierNum = {properties.soldierNum}
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