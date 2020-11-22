import { MatchupGradeModel } from "./MatchupGradeModel";
import { TeamModel } from "./TeamModel";

export interface MatchupModel {
    week: string;
    week_start: string;
    week_end: string;
    status: string;
    is_playoffs: string;
    is_consolation: string;
    is_matchup_recap_available: number;
    matchup_recap_url: string;
    matchup_recap_title: string;
    matchup_grades: MatchupGradeModel[];
    is_tied: number;
    winner_team_key: string;
    teams: TeamModel[];
}