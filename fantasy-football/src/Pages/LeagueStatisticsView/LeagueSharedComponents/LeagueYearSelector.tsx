import React from "react";
import leagues from '../../../Data/LeaguesData';
import { ToggleButton } from 'primereact/togglebutton';
import { extend } from "lodash";
import { LeagueDataModel } from "../../../Models/LeagueData";
import { ensure } from "../../../Helpers/TypeScriptHelpers";


type YearSelectorProps = {
    internalLeagueId: number,
    setYearsCallback: (years: number[]) => void
}

type YearSelectorState = {
    years: YearToggleModel[]
}

interface YearToggleModel {
    year: number,
    checked: boolean
}


class LeagueYearSelector extends React.Component<YearSelectorProps, YearSelectorState> {
    constructor(props: YearSelectorProps) {
        super(props);
        let years: YearToggleModel[] = leagues.filter(x => x.internalId === this.props.internalLeagueId).map(x => ({year: x.year, checked: false}));

        this.state = {
            years    
        };
    }

    CreateYearButtons = (leaguesFiltered: LeagueDataModel[], cb: (year: number) => void): JSX.Element[] =>  {
        let buttons: JSX.Element[] = [];    
        leaguesFiltered.forEach(league => {
            buttons.push(
                <ToggleButton checked={ensure(this.state.years.find(x => x.year === league.year)).checked} onLabel={`${league.year}`} offLabel={`${league.year}`} onChange={(e) => {cb(league.year)}}></ToggleButton>
            )
        });
        return buttons;  
    }

    onToggleButtonClicked = (year: number): void => {
        let allYears = this.state.years;
        let stateYear = ensure(allYears.find(x => x.year === year));
        stateYear.checked = !stateYear.checked;
        this.setState({years: allYears});
        this.props.setYearsCallback(allYears.filter(x => x.checked).map(x => x.year));
    }
    
    render() {
        let filteredLeagues = leagues.filter(x => x.internalId === this.props.internalLeagueId);

        return this.CreateYearButtons(filteredLeagues, this.onToggleButtonClicked);
    }
}

export default LeagueYearSelector;