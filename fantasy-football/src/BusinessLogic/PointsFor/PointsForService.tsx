import scoreboardData from '../../Data/YahooData/ScoreboardData';
import { CreateMatchupTeamPointsArray, GetScoreboardsForYears, GetStandingsForYears } from '../../Helpers/LeagueHelpers';
import { TeamModel } from '../../Models/ScoreboardModels/TeamModel';
import _ from 'lodash';
import { MatchupTeamPointsModel } from '../../Models/BusinessLogicModels/MatchupTeamPointsModel';
import { StandingModel, StandingModelExtended } from '../../Models/StandingsModels/StandingModel';
import { ChartData, ChartOptions } from 'chart.js';
import { AfterBodyCallback, ChartOptionsCallbackModel, LabelCallback, SetEmptyTitleCallback, xAxisCallback } from '../../Helpers/ChartHelper';



export function GetSeasonChartData(internalLeagueId: number, selectedYears: number[], sort: number): StandingModelExtended[] {
    let standings = GetStandingsForYears(selectedYears, internalLeagueId);

    let sortedData = standings.sort((a, b) => {
        return +a.standings.points_for > +b.standings.points_for ? -1 * sort : 1 * sort;
    });
    return sortedData.slice(0, 10);    
}

export function GetTopWeeksData(internalLeagueId: number, selectedYears: number[], sort: number) {
    let weekAndTeams = CreateMatchupTeamPointsArray(selectedYears, internalLeagueId);
    //Sort data
    let sortedData = weekAndTeams.sort((a, b) => {
        return +a.team.points.total > +b.team.points.total ? -1 * sort : 1 * sort;
    });

    //Currently only supporting top 10
    //TODO make that an option
    return sortedData.slice(0, 10);
}

export function CreateSeasonChart(standings: StandingModelExtended[]): ChartData {
    //Changes the tool tip based on this model.
    let callbackItems: ChartOptionsCallbackModel[] = standings.map(x => (
        {
            label: 'Team',
            labelValue: x.name,
            xAxisValue: x.name,
            bodyItems: [
                {
                    label: 'Points For',
                    value: x.standings.points_for
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
                label: 'Points For',
                data: standings.map(x => +x.standings.points_for),
                fill: '#4bc0c0',
                borderColor: '#4bc0c0',                        
            }
        ]
    };
    return chartData;
}

export function CreateSeasonChartOptions(): ChartOptions {
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

export function CreateTopWeeksChartData(): ChartData {
    return {};
}

export function CreateTopWeeksChartOptions(): ChartOptions {
    return {};
}