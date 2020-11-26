import { ChartData, ChartTooltipItem } from "chart.js";

export interface ChartOptionsCallbackModel {
    label: string,
    labelValue: string,
    xAxisValue: string,
    bodyItems: ChartOptionsBodyItemsModel[]
}

export interface ChartOptionsBodyItemsModel {
    label: string,
    value: string
}

export function SetEmptyTitleCallback() {
    return (item: ChartTooltipItem[], data: ChartData) => {return ''};
}

export function LabelCallback(): (tooltipItem: Chart.ChartTooltipItem, data: ChartData) => string | string[] {
    let cb = (tooltipItem: Chart.ChartTooltipItem, data: ChartData): string | string[] => {
        let callbackModel: ChartOptionsCallbackModel | null = null;
        if(tooltipItem.index !== undefined && tooltipItem.index !== null) {
            callbackModel = JSON.parse(data?.labels?.[tooltipItem.index] as string) as ChartOptionsCallbackModel;
        }
        return callbackModel ? `${callbackModel.label}: ${callbackModel.labelValue}` : '';
    };
    return cb;
}

export function AfterBodyCallback(): (item: Chart.ChartTooltipItem[], data: ChartData) => string | string[] {
    let cb = (item: Chart.ChartTooltipItem[], data: ChartData): string | string[] => {
        let standingItem = JSON.parse(item?.[0].label as string) as ChartOptionsCallbackModel;
        let bodyItems: string[] = [];
        standingItem.bodyItems.forEach(element => {
            bodyItems.push(`\t\t\t ${element.label}: ${element.value}`)
        });
        return bodyItems;
    }
    return cb;
}

export function xAxisCallback(): (value: string | number, index: number, values: number[] | string[]) => string | number | null | undefined {
    let cb = (value: string | number, index: number, values: number[] | string[]): string | number | null | undefined => {
        let item = JSON.parse(value as string) as ChartOptionsCallbackModel
        return item.xAxisValue;
    }
    return cb;
}