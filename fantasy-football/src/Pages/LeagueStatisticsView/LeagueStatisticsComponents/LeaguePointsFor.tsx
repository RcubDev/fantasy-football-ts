import React from "react";
import LeagueYearSelector from "../LeagueSharedComponents/LeagueYearSelector";
import { options, sortOptions } from '../../../Data/LeagueStatisticsStaticData/PointsForStaticData';
import { SelectButton } from 'primereact/selectbutton';
import { CreateSeasonChart, CreateSeasonChartOptions, GetSeasonChartData, GetTopWeeksData } from "../../../BusinessLogic/PointsFor/PointsForService";
import { Chart } from 'primereact/chart'
import { ChartData, ChartOptions, NestedTickOptions } from "chart.js";
import { StandingModel, StandingModelExtended } from "../../../Models/StandingsModels/StandingModel";
type PointsForProps = {
    internalLeaugeId: number
}

type PointsForState = {
    selectedYears: number[],
    selectedChartType: string,
    sortBy: number
}

const SepartorStyle = {
    marginLeft: 100,
    marginTop: 20
}

class PointsFor extends React.Component<PointsForProps, PointsForState> {
    constructor(props: PointsForProps) {
        super(props);
        this.state = {
            selectedYears: [],
            selectedChartType: 'seasontotal',
            sortBy: 1
        }
    }
    
    setSelectedYears = (years: number[]) => {
        this.setState({selectedYears: years});
    }

    displayChart() {
        let chartOptions: ChartOptions = {};
        let chartData: ChartData = {};
        if(this.state.selectedChartType === 'seasontotal') {
            let data = GetSeasonChartData(this.props.internalLeaugeId, this.state.selectedYears, this.state.sortBy);
            let chartData = CreateSeasonChart(data);            
            chartOptions = CreateSeasonChartOptions();                    
            return (<Chart type='bar' data={chartData} options={chartOptions} style={{width: 1000}}/>)
        }
        else if(this.state.selectedChartType === 'topweeks') {
            let data = GetTopWeeksData(this.props.internalLeaugeId, this.state.selectedYears, this.state.sortBy);
            //chartData = ;
            let chartOptions: ChartOptions = {};
        }
    }    

    render() {
        
        return (
            <div style={{marginLeft: 100}}>
                <div style={SepartorStyle}>
                    <LeagueYearSelector internalLeagueId={this.props.internalLeaugeId} setYearsCallback={this.setSelectedYears}></LeagueYearSelector>
                </div>
                <div style={{marginLeft: 10, marginTop: 20}}>
                    {/* chart options here */}
                    <SelectButton optionLabel='label' optionValue='value' value={this.state.selectedChartType} options={options} onChange={(e) => {this.setState({ selectedChartType: e.value})}} ></SelectButton>
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

export default PointsFor;