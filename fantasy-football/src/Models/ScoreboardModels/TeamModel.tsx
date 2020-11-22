import { ManagerModel } from "./ManagerModel";
import { PointsModel } from "./PointsModel";
import { ProjectedPointsModel } from "./ProjectedPoints";
import { RosterAddsModel } from "./RosterAddsModel";
import { TeamLogoModel } from "./TeamLogoModel";

export interface TeamModel {
    team_key: string;
    team_id: string;
    name: string;
    url: string;
    team_logos: TeamLogoModel[];
    waiver_priority: number;
    number_of_moves: string;
    number_of_trades: any;
    roster_adds: RosterAddsModel;
    league_scoring_type: string;
    has_draft_grade: number;
    draft_grade: string;
    draft_recap_url: string;
    managers: ManagerModel[];
    points: PointsModel;
    projected_points: ProjectedPointsModel;
    clinched_playoffs?: number;
}