import { TransactionDetailsModel } from "./TranactionDetailsModel";
import { TransactionNameModel } from "./TransactionNameModel";

export interface TransactionPlayerModel {
    player_key: string;
    player_id: string;
    name: TransactionNameModel;
    editorial_team_abbr: string;
    display_position: string;
    position_type: string;
    transaction: TransactionDetailsModel;
}
