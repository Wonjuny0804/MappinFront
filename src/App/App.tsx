import React from 'react';
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Schedule
} from "../pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/schedule" component={Schedule}/>
      </Switch>
    </div>
  );
}

export default App;
