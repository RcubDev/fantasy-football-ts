import scoreboardData from '../../Data/YahooData/ScoreboardData';
import { GetScoreboardsForYears } from '../../Helpers/LeagueHelpers';
import { TeamModel } from '../../Models/ScoreboardModels/TeamModel';
import _ from 'lodash';
export interface MatchupTeamPoints {
    week: string,
    team: TeamModel,
    leagueId: string
}


export function GetWeekByWeekChartData(internalLeagueId: number, selectedYears: number[]): MatchupTeamPoints[] {
    let weekAndTeams = CreateMatchupTeamPointsArray(internalLeagueId, selectedYears);
    //Sort data
    let sortedData = weekAndTeams.sort((a, b) => {
        return +a.team.points.total > +b.team.points.total ? -1 : 1;
    });

    //Currently only supporting top 10
    //TODO make that an option
    return sortedData.slice(0, 10);
}

export function GetSeasonChartData(internalLeagueId: number, selectedYears: number[]) {
    let weekAndTeams = CreateMatchupTeamPointsArray(internalLeagueId, selectedYears);
    // weekAndTeams.forEach(element => {
    //     element.
    // });
    let test = _.groupBy(weekAndTeams, 'leagueId');
    debugger;
}

export function GetTopWeeksData(internalLeagueId: number, selectedYears: number[]) {

}

function CreateMatchupTeamPointsArray(internalLeagueId: number, selectedYears: number[]) {
    let matchupsExtended = GetScoreboardsForYears(selectedYears, internalLeagueId).flatMap(x => ({matchups: x.matchups, leagueId: x.leagueId}));

    let weekAndTeams: MatchupTeamPoints[] = [];
    //Organize data
    matchupsExtended.forEach(element => {
        element.matchups.forEach(matchup => {
            matchup.teams.forEach(team => {
                weekAndTeams.push({
                    week: matchup.week,
                    team: team,
                    leagueId: element.leagueId
                });
            })
        });
    });
    return weekAndTeams;
}