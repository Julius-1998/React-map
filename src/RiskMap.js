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
        console.log("rendering")
        return (
            <>
            {/* <p id = {"territory-"+this.props.name} className = "territory" >{this.props.name}{this.props.owner}</p> */}
            <TerritoryDetail buttonDisplayMessage= {this.props.name} 
                textMessage = {JSON.stringify(this.props)}
            ></TerritoryDetail>
            </>
        )
    }
    // componentDidUpdate(prevProps) {
    //     this.render()
    //     // if(this.props!== prevProps) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    //     // {
    //     //     console.log(this.props);
    //     //     console.log(prevProps);
    //     //     this.setState(this.state)
    //     // }
    // } 
}

class Map extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("map rendering");
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