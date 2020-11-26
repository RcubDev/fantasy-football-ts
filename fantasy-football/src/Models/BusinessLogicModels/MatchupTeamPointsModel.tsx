import { TeamModel } from "../ScoreboardModels/TeamModel";

export interface MatchupTeamPointsModel {
    week: string,
    team: TeamModel,
    leagueId: string,
    year: string
}
