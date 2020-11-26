import { ChartData, ChartOptions } from "chart.js";
import { AfterBodyCallback, ChartOptionsCallbackModel, LabelCallback, SetEmptyTitleCallback, xAxisCallback } from "../../Helpers/ChartHelper";
import { GetStandingsForYears } from "../../Helpers/LeagueHelpers";
import { StandingModelExtended } from "../../Models/StandingsModels/StandingModel";

export function CreatePointsAgainstData(internalLeagueId: number, selectedYears: number[], sort: number): StandingModelExtended[] {
    let standings = GetStandingsForYears(selectedYears, internalLeagueId);

    let sortedData = standings.sort((a, b) => {
        return +a.standings.points_against > +b.standings.points_against ? -1 * sort : 1 * sort;
    });
    return sortedData.slice(0, 10);    
}

export function CreatePointsAgainstChartData(standings: StandingModelExtended[]): ChartData {
    let callbackItems: ChartOptionsCallbackModel[] = standings.map(x => (
        {
            label: 'Team',
            labelValue: x.name,
            xAxisValue: x.name,
            bodyItems: [
                {
                    label: 'Points Against',
                    value: `${x.standings.points_against}`
                },
                {
                    label: 'Year',
                    value: x.year
                }, 
                {
                    label: 'Current Standing',
                    value: x.standings.rank
                }
            ]
        })
    );

    let chartData: ChartData = {
        labels: callbackItems.map(x => JSON.stringify(x)),
        datasets: [
            {
                label: 'Points Against',
                data: standings.map(x => +x.standings.points_against),
                fill: '#4bc0c0',
                borderColor: '#4bc0c0'
            }
        ]
    };
    return chartData;

}

export function CreatePointsAgainstChartOptions() {
    let chartOptions: ChartOptions = {
        tooltips: {
            callbacks: {
                label: LabelCallback(),
                afterBody:  AfterBodyCallback(),
                title: SetEmptyTitleCallback()
            }
        },
        //This controls the x-axis labels
        scales: {
            xAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: xAxisCallback()
                }
            }]
        }
    };
    return chartOptions;
}