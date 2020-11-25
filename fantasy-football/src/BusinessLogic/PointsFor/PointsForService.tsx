import scoreboardData from '../../Data/YahooData/ScoreboardData';
import { CreateMatchupTeamPointsArray, GetScoreboardsForYears, GetStandingsForYears } from '../../Helpers/LeagueHelpers';
import { TeamModel } from '../../Models/ScoreboardModels/TeamModel';
import _ from 'lodash';
import { MatchupTeamPointsModel } from '../../Models/BusinessLogicModels/MatchupTeamPointsModel';



export function GetWeekByWeekChartData(internalLeagueId: number, selectedYears: number[]): MatchupTeamPointsModel[] {
    let weekAndTeams = CreateMatchupTeamPointsArray(selectedYears, internalLeagueId);
    //Sort data
    let sortedData = weekAndTeams.sort((a, b) => {
        return +a.team.points.total > +b.team.points.total ? -1 : 1;
    });

    //Currently only supporting top 10
    //TODO make that an option
    return sortedData.slice(0, 10);
}

export function GetSeasonChartData(internalLeagueId: number, selectedYears: number[]) {
    let weekAndTeams = GetStandingsForYears(selectedYears, internalLeagueId);

    let test = _.groupBy(weekAndTeams, 'leagueId');
    debugger;
}

export function GetTopWeeksData(internalLeagueId: number, selectedYears: number[]) {

}

