import { MatchupModel } from "./MatchupModel";

export interface ScoreboardModel {
    matchups: MatchupModel[];
    week: string;
}