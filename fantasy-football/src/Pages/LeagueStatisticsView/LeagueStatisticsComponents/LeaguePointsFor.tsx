import React from "react";
import LeagueYearSelector from "../LeagueSharedComponents/LeagueYearSelector";


type PointsForProps = {
    internalLeaugeId: number
}

type PointsForState = {
    selectedYears: number[]
}

class PointsFor extends React.Component<PointsForProps, PointsForState> {
    constructor(props: PointsForProps) {
        super(props);
    }

    render() {
        return (
            <>
            <div style={{marginLeft: 100, marginTop: 20}}>
                <LeagueYearSelector internalLeagueId={this.props.internalLeaugeId} filterLeagues={() => {console.log('filtered')}}></LeagueYearSelector>
            </div>
            <div>
                {/* chart options here */}
            </div>
            <div>
                {/* chart here */}
            </div>
            </>
        )
    }
}

export default PointsFor;