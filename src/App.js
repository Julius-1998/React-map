import logo from './logo.svg';
import './App.css';
import board from './board_demo.jpg'
import React from 'react';
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
const territoryNames = [
  "This is map 1",
  "This is map 2",
  "This is map 3"
]

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      image:board,
      owners:["red","red","green"]
    };
  }
  renderTerritory(i){
    return <Territory index={i} owner={this.state.owners[i]}/>;
  }
  render(){
    return(
      <div class = "container">
        {/* <img id ="board_image" src = {this.state.image} alt = "Logo" /> */}
          <div className = "territories">
            {this.renderTerritory(0)}
            {this.renderTerritory(1)}
            {this.renderTerritory(2)}
          </div>
      </div>
    )
  }
}
class Territory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: "territory-"+String(props.index),
      name:territoryNames[props.index],
      owner:props.owner
    }
  }
  render(){
    return (
      <div className = "territory" id = {this.state.id}>{this.state.name}owned by {this.state.owner}</div>
    )
  }
}


// export default BasePicture;

export default Board