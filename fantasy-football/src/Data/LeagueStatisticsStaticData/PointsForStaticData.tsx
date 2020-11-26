import { MultiSelectOptionsModel } from "../../Models/MultiSelectOptionsModel";

export const options: MultiSelectOptionsModel<string>[] = [
    {
        label: 'Season total',
        value: 'seasontotal'
    },
    {
        label: 'Top weeks',
        value: 'topweeks'
    }
];

export const sortOptions: MultiSelectOptionsModel<number>[] = [
    {
        label: 'Ascending',
        value: 1
    },
    {
        label: 'Descending',
        value: -1
    }
]