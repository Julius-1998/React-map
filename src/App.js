import SignIn from "./Login";
import Game from "./ControlPanel";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <BrowserRouter>
          <Routes>
            {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
            <Route exact path="/login" component={SignIn} />

            {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
            <Route path="/game" component={Game} />

          </Routes>
        </BrowserRouter>
      </>
    );
  }

}

export default App;