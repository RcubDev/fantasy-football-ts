import { ScoreboardModel, ScoreboardModelExtended } from "../Models/ScoreboardModels/ScoreboardModel";
import { GetLeagueIdsFromInteralLeagueId, GetYahooGameKeyFromSeasonYear, GetYahooLeagueKeyIdentifier } from "./YahooDataHelpers";
import { ensure } from "./TypeScriptHelpers";
import scoreboardData from '../Data/YahooData/ScoreboardData';
export function GetScoreboardsForYear() {

}

export function GetScoreboardsForYears(years: number[], internalLeagueId: number): ScoreboardModelExtended[] {
    let scoreBoards: ScoreboardModelExtended[] = [];
    let leagueIds = GetLeagueIdsFromInteralLeagueId(internalLeagueId);
    years.forEach(year => {
        let leagueId = ensure(leagueIds.find(x => x.year === year)).yahooLeagueId;
        let yearScoreboards = scoreboardData.filter(x => x.league_id === leagueId).map(x => ({matchups: x.scoreboard.matchups, week: x.scoreboard.week, leagueId: leagueId}));
        scoreBoards = scoreBoards.concat(yearScoreboards);
    });
    return scoreBoards;
}