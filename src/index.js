import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './App';
import ControlPanelDemo from './ControlPanel';
import reportWebVitals from './reportWebVitals';
import SignInSide from './ControlPanel';
import App from './App';
import Game from './ControlPanel';
import HexMap from './HexMap';

// ReactDOM.render(
//   <Board/>,
//   document.getElementById('root')
// );
ReactDOM.render(
  // <Game/>,
  <Game/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
