export interface TransactionDetailsModel {
    type: string;
    source_type: string;
    destination_type: string;
    destination_team_key?: string;
    destination_team_name?: string;
    source_team_key?: string;
    source_team_name?: string;
}