export interface ChartListInfo{
    id?:number;
    chartName?: string;
    chartType?: string;
    chartColorA?: string;
    chartColorB?: string;
    chartDate?: string;
    data1?:any[],
    data2?:any[]
}



export interface Ichart {
    chartInfoList: ChartListInfo[]
    // error: string | null
}

export interface AppStateInterface {
    chartInfoList: Ichart;
}