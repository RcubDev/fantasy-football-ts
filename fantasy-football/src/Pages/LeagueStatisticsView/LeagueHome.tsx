import React from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import leagues from "../../Data/LeaguesData";
import "./LeagueHome.css";
import { withRouter, RouteComponentProps } from "react-router-dom";
import _ from "lodash";
import { LeagueData } from "../../Models/LeagueData";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/api";
import items from "../../Data/LeagueMenu";
import PointsFor from "./LeagueStatisticsComponents/LeaguePointsFor";

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
    this.setState({viewType: this.props.match.params.viewType.toLowerCase()});
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
        console.log("here");
        break;
      case "pointsleftonbench":
        console.log("here");
        break;
      case "wins":
        console.log("here");
        break;
      case "losses":
        console.log("here");
        break;
      case "pointsfor":
        console.log("here");
        break;
      case "pointsfor":
        console.log("here");
        break;
      case "pointsfor":
        console.log("here");
        break;
      default:
        break;      
    }
  }

  render() {
    let menuItems = this.setMenuItemCallbacks(items);
    return (
      <div>
        <Menu model={menuItems}></Menu>
        {this.renderStatComponent(this.state.viewType)}
      </div>
    );
  }
}

export default withRouter(LeagueHome);
