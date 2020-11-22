import { ScoreboardModel } from "../Models/ScoreboardModels/ScoreboardModel";
import { GetLeagueIdsFromInteralLeagueId, GetYahooGameKeyFromSeasonYear, GetYahooLeagueKeyIdentifier } from "./YahooDataHelpers";
import { ensure } from "./TypeScriptHelpers";
import scoreboardData from '../Data/YahooData/ScoreboardData';
export function GetScoreboardsForYear() {

}

export function GetScoreboardsForYears(years: number[], internalLeagueId: number): ScoreboardModel[] {
    let scoreBoards: ScoreboardModel[] = [];
    let leagueIds = GetLeagueIdsFromInteralLeagueId(internalLeagueId);
    years.forEach(year => {
        let leagueId = ensure(leagueIds.find(x => x.year === year)).yahooLeagueId;
        let yearScoreboards = scoreboardData.filter(x => x.league_id === leagueId).map(x => x.scoreboard);
        scoreBoards.concat(yearScoreboards);
    });
    return scoreBoards;
}