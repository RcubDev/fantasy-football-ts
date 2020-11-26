import { TransactionPlayerModel } from "./TransactionPlayerModel";

export interface TransactionModel {
    players: TransactionPlayerModel[];
    transaction_key: string;
    transaction_id: string;
    type: string;
    status: string;
    timestamp: string;
    trader_team_key?: string;
    trader_team_name?: string;
    tradee_team_key?: string;
    tradee_team_name?: string;
}