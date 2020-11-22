import { MultiSelectOptionsModel } from "../../Models/MultiSelectOptionsModel";

export const options: MultiSelectOptionsModel<string>[] = [
    {
        label: 'Season total',
        value: 'seasontotal'
    },
    {
        label: 'Week by week',
        value: 'weekbyweek'
    },
    {
        label: 'Top weeks',
        value: 'topweeks'
    }
];