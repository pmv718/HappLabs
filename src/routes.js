import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "./Hackathon/Components/LoginPage";
import HackathonHome from "./Hackathon/Components/HomePage";
import AddHacks from './Hackathon/Components/AddHackathon';
import React from "react";
function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginScreen />
          </Route>
          <Route exact path="/hacks">
            <HackathonHome />
          </Route>
          <Route exact path="/addhacks">
            <AddHacks />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;