import React from "react";


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
        return <label>Yes</label>
    }
}

export default PointsFor;