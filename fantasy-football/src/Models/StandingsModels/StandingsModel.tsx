import { OutcomeTotalsModel } from "./OutcomeTotalsModel";
import { StreakModel } from "./StreakModel";

export interface StandingsModel {
    rank: string;
    playoff_seed: string;
    outcome_totals: OutcomeTotalsModel;
    streak: StreakModel;
    points_for: string;
    points_against: number;
}
