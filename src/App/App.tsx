import React from 'react';
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Schedule
} from "../pages";
import { NavBar } from "../components/";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/schedule" component={Schedule}/>
      </Switch>

      <footer style={{height: "400px; width: 100%"}}></footer>
    </div>
  );
}

export default App;
