import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LeagueSelector from "./Pages/LeagueSelector/LeagueSelector";
import LeagueHome from "./Pages/LeagueStatisticsView/LeagueHome";


function ApplicationRouter() {
    return (
      
      <Router>
          <Switch>
          <Route path="/League/:internalLeagueId/Seasons/:seasonId/View/:view">
                {/* <SeasonOverview></SeasonOverview> */}
              </Route>
              <Route path="/League/:internalLeagueId/:viewType">                
                {/* <League></League> */}                
                <LeagueHome></LeagueHome>
              </Route>
              <Route path="/League/:internalLeagueId">                
                {/* <League></League> */}                
                <LeagueHome></LeagueHome>
              </Route>
              <Route path="/">
                <LeagueSelector></LeagueSelector>
              </Route>
          </Switch>
      </Router>
    );
  }
export default ApplicationRouter;