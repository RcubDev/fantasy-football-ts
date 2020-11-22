import { ScoreboardModel } from "./ScoreboardModel";

export interface ScoreboardInfoModel {
    league_key: string;
    league_id: string;
    name: string;
    url: string;
    logo_url: boolean;
    draft_status: string;
    num_teams: number;
    edit_key: number;
    weekly_deadline: string;
    league_update_timestamp: string;
    scoring_type: string;
    league_type: string;
    renew: string;
    renewed: string;
    iris_group_chat_id: string;
    allow_add_to_dl_extra_pos: number;
    is_pro_league: string;
    is_cash_league: string;
    current_week: number;
    start_week: string;
    start_date: string;
    end_week: string;
    end_date: string;
    game_code: string;
    season: string;
    scoreboard: ScoreboardModel;
}