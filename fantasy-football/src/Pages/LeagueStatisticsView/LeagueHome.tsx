import React from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import leagues from "../../Data/LeaguesData";
import "./LeagueHome.css";
import { withRouter, RouteComponentProps } from "react-router-dom";
import _ from "lodash";
import { LeagueDataModel } from "../../Models/LeagueData";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/api";
import items from "../../Data/LeagueMenu";
import PointsFor from "./LeagueStatisticsComponents/PointsFor/LeaguePointsFor";
import LeaguePointsAgainst from "./LeagueStatisticsComponents/PointsAgainst/LeaguePointsAgainst";
import LeagueLosses from "./LeagueStatisticsComponents/Losses/LeagueLosses";
import LeagueWins from "./LeagueStatisticsComponents/Wins/LeagueWins";

type LeagueHomeParams = {
  internalLeagueId: string;
  viewType: string;
};

type LeagueHomeState = {
  viewType: string | undefined;
};

class LeagueHome extends React.Component<
  RouteComponentProps<LeagueHomeParams>,
  LeagueHomeState
> {

  constructor(props: RouteComponentProps<LeagueHomeParams>) {
    super(props);
    this.state = {
      viewType: this.props.match.params.viewType,
    };  
  }

  componentDidMount() {
    console.log(this.props.match.params.internalLeagueId);
    this.setState({viewType: this.props.match.params.viewType?.toLowerCase()});
  }

  setMenuItemCallbacks(items: Array<MenuItem>): Array<MenuItem> {
    console.log("here");
    let newItems: Array<MenuItem> = [...items];
    if (newItems[0] && newItems[0].items) {
      for (let i = 0; i < newItems[0].items.length; i++) {
        let currentItem = newItems[0].items[i] as MenuItem;
        currentItem.command = () => {
          let pathEnd = currentItem.label?.replace(/ /g, "");

          this.setState({ viewType: pathEnd?.toLowerCase() });

          if (this.state.viewType) {
            let lastIndexOf = this.props.match.url.lastIndexOf("/");
            let urlTrimmed = this.props.match.url.substring(0, lastIndexOf);
            this.props.history.push(`${urlTrimmed}/${pathEnd}`);
          } else {
            this.props.history.push(`${this.props.match.url}/${pathEnd}`);
          }
        };
      }
    }
    return newItems;
  }

  renderStatComponent(viewType: string | undefined): JSX.Element | undefined {
    switch (viewType) {
      case "pointsfor":
        return <PointsFor internalLeaugeId={+this.props.match.params.internalLeagueId}></PointsFor>        
      case "pointsagainst":
        return <LeaguePointsAgainst internalLeaugeId={+this.props.match.params.internalLeagueId}></LeaguePointsAgainst>
      case "pointsleftonbench":
        return <h1>UNDER CONSTRUCTION</h1>
      case "wins":
        return <LeagueWins internalLeaugeId={+this.props.match.params.internalLeagueId}></LeagueWins>
      case "losses":
        return <LeagueLosses internalLeaugeId={+this.props.match.params.internalLeagueId}></LeagueLosses>
      case "transactions":
        return <h1>UNDER CONSTRUCTION</h1>
      case "trades":
        return <h1>UNDER CONSTRUCTION</h1>      
      default:
        break;      
    }
  }

  render() {
    let menuItems = this.setMenuItemCallbacks(items);
    return (
      <div style={{width: '100%', display: 'flex'}}>
        <Menu model={menuItems}></Menu>
        <div>                    
            {this.renderStatComponent(this.state.viewType)}             
        </div>        
      </div>
    );
  }
}

export default withRouter(LeagueHome);
