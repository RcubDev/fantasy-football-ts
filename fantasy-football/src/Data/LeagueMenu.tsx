import {MenuItem} from 'primereact/api'

let items: Array<MenuItem> = [
    {
        label: 'League Stats',
        items: [
            {
                label: 'Points For',
            },
            {
                label: 'Points Against'
            },
            {
                label: 'Points Left On Bench'
            },
            {
                label: 'Wins'
            },
            {
                label: 'Losses'
            },
            {
                label: 'Transactions'
            },
            {
                label: 'Trades'
            }
        ]        
    }
];

export default items;