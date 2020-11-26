import React from "react";
import LeagueYearSelector from "../../LeagueSharedComponents/LeagueYearSelector";
import { options, sortOptions } from '../../../../Data/LeagueStatisticsStaticData/PointsForStaticData';
import { SelectButton } from 'primereact/selectbutton';
import { Chart } from 'primereact/chart'
import { ChartData, ChartOptions } from "chart.js";
import { CreatePointsAgainstChartData, CreatePointsAgainstChartOptions, CreatePointsAgainstData } from "../../../../BusinessLogic/League/PointsAgainstService";
import { GetLossesChartData, CreateLossesChartData, CreateLossesChartOptions } from "../../../../BusinessLogic/League/LossesService";

type LeagueLossesProps = {
    internalLeaugeId: number
}

type LeagueLossesState = {
    selectedYears: number[],
    sortBy: number
}

const SepartorStyle = {
    marginLeft: 100,
    marginTop: 20
}

class LeagueLosses extends React.Component<LeagueLossesProps, LeagueLossesState> {
    constructor(props: LeagueLossesProps) {
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
        let data = GetLossesChartData(this.props.internalLeaugeId, this.state.selectedYears, this.state.sortBy);
        let chartData: ChartData = CreateLossesChartData(data);            
        let chartOptions: ChartOptions = CreateLossesChartOptions();

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

export default LeagueLosses;