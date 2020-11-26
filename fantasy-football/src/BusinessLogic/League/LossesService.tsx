import { ChartData, ChartOptions } from "chart.js";
import { AfterBodyCallback, ChartOptionsCallbackModel, LabelCallback, SetEmptyTitleCallback, xAxisCallback } from "../../Helpers/ChartHelper";
import { GetStandingsForYears } from "../../Helpers/LeagueHelpers";
import { StandingModelExtended } from "../../Models/StandingsModels/StandingModel";

export function GetLossesChartData(internalLeagueId: number, selectedYears: number[], sort: number): StandingModelExtended[] {
    let standings = GetStandingsForYears(selectedYears, internalLeagueId);

    let sortedData = standings.sort((a, b) => {
        return +a.standings.outcome_totals.losses > +b.standings.outcome_totals.losses ? -1 * sort : 1 * sort;
    });
    return sortedData.slice(0, 10);    
}

export function CreateLossesChartData(standings: StandingModelExtended[]): ChartData {
    //Changes the tool tip based on this model. The chart options callbacks use this.    
    let callbackItems: ChartOptionsCallbackModel[] = standings.map(x => (
        {
            label: 'Team',
            labelValue: x.name,
            xAxisValue: x.name,
            bodyItems: [
                {
                    label: 'Losses',
                    value: x.standings.outcome_totals.losses
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
                label: 'Losses',
                data: standings.map(x => +x.standings.outcome_totals.losses),
                fill: '#4bc0c0',
                borderColor: '#4bc0c0',                        
            }
        ]
    };
    return chartData;
}

//This is a duplicate of the chart options above. TODO: Change this to a common method.
export function CreateLossesChartOptions(): ChartOptions {
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