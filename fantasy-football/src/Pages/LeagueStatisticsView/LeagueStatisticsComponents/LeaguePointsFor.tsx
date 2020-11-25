import React from "react";
import LeagueYearSelector from "../LeagueSharedComponents/LeagueYearSelector";
import { options } from '../../../Data/LeagueStatisticsStaticData/PointsForStaticData';
import { SelectButton } from 'primereact/selectbutton';
import { GetSeasonChartData, GetWeekByWeekChartData } from "../../../BusinessLogic/PointsFor/PointsForService";
type PointsForProps = {
    internalLeaugeId: number
}

type PointsForState = {
    selectedYears: number[],
    selectedOption: string
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
            selectedOption: 'seasontotal'
        }
    }
    
    setSelectedYears = (years: number[]) => {
        this.setState({selectedYears: years});
    }

    render() {
        GetSeasonChartData(this.props.internalLeaugeId, this.state.selectedYears);
        return (
            <div style={{marginLeft: 100}}>
                <div style={SepartorStyle}>
                    <LeagueYearSelector internalLeagueId={this.props.internalLeaugeId} setYearsCallback={this.setSelectedYears}></LeagueYearSelector>
                </div>
                <div style={{marginLeft: 10, marginTop: 20}}>
                    {/* chart options here */}
                    <SelectButton optionLabel='label' optionValue='value' value={this.state.selectedOption} options={options} onChange={(e) => {this.setState({ selectedOption: e.value})}} ></SelectButton>
                </div>
                <div>
                    {/* chart here */}
                </div>
            </div>
        )
    }
}

export default PointsFor;