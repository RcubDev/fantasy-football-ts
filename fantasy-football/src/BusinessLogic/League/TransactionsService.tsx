import { ChartData, ChartOptions } from "chart.js";
import { ChartOptionsCallbackModel, LabelCallback, AfterBodyCallback, SetEmptyTitleCallback, xAxisCallback } from "../../Helpers/ChartHelper";
import { GetStandingsForYears } from "../../Helpers/LeagueHelpers";
import { StandingModelExtended } from "../../Models/StandingsModels/StandingModel";
import { TransactionModel } from "../../Models/TransactionModels/TransactionModel";
import _ from 'lodash';

export function GetTransactionsChartData(internalLeagueId: number, selectedYears: number[], sort: number): StandingModelExtended[] {
    let standings = GetStandingsForYears(selectedYears, internalLeagueId);

    let sortedData = standings.sort((a, b) => {
        return +a.standings.outcome_totals.wins > +b.standings.outcome_totals.wins ? -1 * sort : 1 * sort;
    });
    return sortedData.slice(0, 10);    
}

export function CreateTransactionsChartData(transactions: TransactionModel[]): ChartData {
    
    // //Changes the tool tip based on this model. The chart options callbacks use this.  
    // _.groupBy(transactions, (x => {return x.tradee_team_key}));  
    // let callbackItems: ChartOptionsCallbackModel[] = transactions.map(x => (
    //     {
    //         label: 'Team',
    //         labelValue: x.,
    //         xAxisValue: x.name,
    //         bodyItems: [
    //             {
    //                 label: 'Wins',
    //                 value: x.standings.outcome_totals.wins
    //             },
    //             {
    //                 label: 'Year',
    //                 value: x.year
    //             }, 
    //             {
    //                 label: 'Current Standing',
    //                 value: x.standings.rank
    //             }
    //         ]
    //     })
    // );
    
    // let chartData: ChartData = {
    //     labels: callbackItems.map(x => JSON.stringify(x)),
    //     datasets: [
    //         {
    //             label: 'Wins',
    //             data: transactions.map(x => +x.standings.outcome_totals.wins),
    //             fill: '#4bc0c0',
    //             borderColor: '#4bc0c0',                        
    //         }
    //     ]
    // };
    // return chartData;
    return {};
}

//This is a duplicate of the chart options above. TODO: Change this to a common method.
export function CreateTransactionsChartOptions(): ChartOptions {
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