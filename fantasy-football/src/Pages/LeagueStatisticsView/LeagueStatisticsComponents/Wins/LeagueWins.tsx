import React from "react";
import LeagueYearSelector from "../../LeagueSharedComponents/LeagueYearSelector";
import { options, sortOptions } from '../../../../Data/LeagueStatisticsStaticData/PointsForStaticData';
import { SelectButton } from 'primereact/selectbutton';
import { Chart } from 'primereact/chart'
import { ChartData, ChartOptions } from "chart.js";
import { CreateWinsChartData, CreateWinsChartOptions, GetWinsChartData } from "../../../../BusinessLogic/League/WinsService";

type LeagueWinsProps = {
    internalLeaugeId: number
}

type LeagueWinsState = {
    selectedYears: number[],
    sortBy: number
}

const SepartorStyle = {
    marginLeft: 100,
    marginTop: 20
}

class LeagueWins extends React.Component<LeagueWinsProps, LeagueWinsState> {
    constructor(props: LeagueWinsProps) {
        super(props);
        this.state = {
            selectedYears: [],
            sortBy: 1
        }
    }
    
    setSelectedYears = (years: number[]) => {
        this.setState({selectedYears: years});
    }

    displayChart() {
        let data = GetWinsChartData(this.props.internalLeaugeId, this.state.selectedYears, this.state.sortBy);
        let chartData: ChartData = CreateWinsChartData(data);            
        let chartOptions: ChartOptions = CreateWinsChartOptions();

        return (<Chart type='bar' data={chartData} options={chartOptions} style={{width: 1000}}/>)

    }    

    render() {
        
        return (
            <div style={{marginLeft: 100}}>
                <div style={SepartorStyle}>
                    <LeagueYearSelector internalLeagueId={this.props.internalLeaugeId} setYearsCallback={this.setSelectedYears}></LeagueYearSelector>
                </div>
                <div style={{marginLeft: 10, marginTop: 20}}>
                    {/* chart options here */}
                    <SelectButton optionLabel='label' optionValue='value' value={this.state.sortBy} options={sortOptions} onChange={(e) => {this.setState({ sortBy: e.value})}} ></SelectButton>
                </div>
                <div>
                    {/* chart here */}
                    {this.displayChart()}
                </div>
            </div>
        )
    }
}

export default LeagueWins;