import { MatchupModel } from "./MatchupModel";

export interface ScoreboardModel {
    matchups: MatchupModel[];
    week: string;
}

export interface ScoreboardModelExtended {
    matchups: MatchupModel[];
    week: string;
    leagueId: string;
}