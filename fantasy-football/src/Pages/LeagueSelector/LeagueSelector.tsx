import React from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import leagues from '../../Data/LeaguesData';
import "./LeagueSelector.css";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import _ from 'lodash';
import { LeagueDataModel } from "../../Models/LeagueData";

class LeagueSelector extends React.Component<RouteComponentProps> {

  currentYear = 2020;

  nextPath(path: string) {
    this.props.history.push(path);
  }

  ReadAllLeagueInfo() {
    let leaguesGrid: JSX.Element[] = [];
    let info = _.uniqBy(leagues, 'internalId');
    info.forEach((element: LeagueDataModel) => {
      let item = (
        <div className="hover-div p-col p-shadow-10" style={{ margin: 25, padding:0, cursor: "pointer" }} onClick={() => this.nextPath(`/League/${element.internalId}`)}>
          <div style={{display:"flex", alignItems:"center", textAlign: "center", justifyContent: "center", width:"100%", height:350}} className="hover-div-text">
            <h1>{element.name}</h1>
          </div>
        </div>
      );
      leaguesGrid.push(item);
    });
    return leaguesGrid;
  }

  render() {
    return (
      <div style={{display: "flex",
        justifyContent: "center"}}>
          <div className="p-grid p-align-center" style={{width: "80%"}}>
            {this.ReadAllLeagueInfo()}
          </div>        
      </div>
      
    );
  }
}

export default withRouter(LeagueSelector);
