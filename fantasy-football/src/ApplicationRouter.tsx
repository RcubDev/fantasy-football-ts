import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LeagueSelector from "./Pages/LeagueSelector/LeagueSelector";


function ApplicationRouter() {
    return (
      <Router>
          <Switch>
          <Route path="/League/:internalLeagueId/Seasons/:seasonId/View/:view">
                {/* <SeasonOverview></SeasonOverview> */}
              </Route>
              <Route path="/League/:internalLeagueId">
                {/* <League></League> */}
              </Route>
              <Route path="/">
                <LeagueSelector></LeagueSelector>
              </Route>
          </Switch>
      </Router>
    );
  }
export default ApplicationRouter;