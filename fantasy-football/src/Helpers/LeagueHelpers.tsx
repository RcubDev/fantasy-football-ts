import { ScoreboardModelExtended } from "../Models/ScoreboardModels/ScoreboardModel";
import { GetLeagueIdsFromInteralLeagueId } from "./YahooDataHelpers";
import { ensure } from "./TypeScriptHelpers";
import scoreboardData from '../Data/YahooData/ScoreboardData';
import standings from '../Data/YahooData/StandingsData';
import { MatchupTeamPointsModel } from "../Models/BusinessLogicModels/MatchupTeamPointsModel";
export function GetScoreboardsForYear() {

}

export function GetScoreboardsForYears(years: number[], internalLeagueId: number): ScoreboardModelExtended[] {
    let scoreBoards: ScoreboardModelExtended[] = [];
    let leagueIds = GetLeagueIdsFromInteralLeagueId(internalLeagueId);
    years.forEach(year => {
        let leagueId = ensure(leagueIds.find(x => x.year === year)).yahooLeagueId;
        let yearScoreboards = scoreboardData.filter(x => x.league_id === leagueId).map(x => ({matchups: x.scoreboard.matchups, week: x.scoreboard.week, leagueId: leagueId, year: x.season}));
        scoreBoards = scoreBoards.concat(yearScoreboards);
    });
    return scoreBoards;
}

export function GetStandingsForYears(years: number[], internalLeagueId: number) {
    let leagueIds = GetLeagueIdsFromInteralLeagueId(internalLeagueId);
    let selectedStandings: any = [];
    years.forEach(year => {
        let leagueId = ensure(leagueIds.find(x => x.year === year)).yahooLeagueId;
        let yearStandings = standings.filter(x => x.league_id === leagueId).map(x => x.standings);
        selectedStandings.concat(yearStandings);
    });
    return selectedStandings;
}

export function CreateMatchupTeamPointsArray(selectedYears: number[], internalLeagueId: number,) {
    let matchupsExtended = GetScoreboardsForYears(selectedYears, internalLeagueId).flatMap(x => ({matchups: x.matchups, leagueId: x.leagueId, year: x.year}));

    let weekAndTeams: MatchupTeamPointsModel[] = [];
    //Organize data
    matchupsExtended.forEach(element => {
        element.matchups.forEach(matchup => {
            matchup.teams.forEach(team => {
                weekAndTeams.push({
                    week: matchup.week,
                    team: team,
                    leagueId: element.leagueId,
                    year: element.year
                });
            })
        });
    });
    return weekAndTeams;
}