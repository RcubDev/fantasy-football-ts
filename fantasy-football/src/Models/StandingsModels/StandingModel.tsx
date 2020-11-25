import { RosterAddsModel } from "../ScoreboardModels/RosterAddsModel";
import { ManagerModel } from "../SharedModels/ManagerModel";
import { TeamLogoModel } from "../SharedModels/TeamLogoModel";
import { StandingsModel } from "./StandingsModel";

export interface StandingModel {
    team_key: string;
    team_id: string;
    name: string;
    url: string;
    team_logos: TeamLogoModel[];
    waiver_priority: number;
    number_of_moves: string;
    number_of_trades: any;
    roster_adds: RosterAddsModel;
    clinched_playoffs?: number;
    league_scoring_type: string;
    has_draft_grade: number;
    draft_grade: string;
    draft_recap_url: string;
    managers: ManagerModel[];
    standings: StandingsModel;
}