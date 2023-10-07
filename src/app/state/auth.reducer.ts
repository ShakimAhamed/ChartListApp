 
import { createReducer, on } from "@ngrx/store";
import { Ichart } from "../model/chartlistinfo.modal";
import * as ChartActions from "./auth.action";


export const initialState: Ichart = {
  chartInfoList: [
      {id: 1, chartName: 'Hydrogen', chartType: 'spline', chartColorA: '#FF530D',chartColorB: '#6610f2', chartDate:'2023-10-04',data1:[
        [Date.UTC(2021, 8, 12), 2202],
        [Date.UTC(2021, 8, 13), 1234],
        [Date.UTC(2021, 8, 14), 1245],
        [Date.UTC(2021, 8, 15), 3000],
        [Date.UTC(2021, 8, 16), 2345],
        [Date.UTC(2021, 8, 17), 2505],
        [Date.UTC(2021, 8, 18), 4933]
        ],data2:[
          [Date.UTC(2021, 8, 12), 1234],
          [Date.UTC(2021, 8, 13), 2202],
          [Date.UTC(2021, 8, 14), 3000],
          [Date.UTC(2021, 8, 15), 3000],
          [Date.UTC(2021, 8, 16), 2345],
          [Date.UTC(2021, 8, 17), 3000],
          [Date.UTC(2021, 8, 18), 2505]]
      },
      {id: 2, chartName: 'Helium', chartType: 'line', chartColorA: '#FF530D',chartColorB: '#6610f2', chartDate:'2023-10-05',data1:[
        [Date.UTC(2021, 8, 12), 2202],
        [Date.UTC(2021, 8, 13), 1234],
        [Date.UTC(2021, 8, 14), 1245],
        [Date.UTC(2021, 8, 15), 3000],
        [Date.UTC(2021, 8, 16), 2345],
        [Date.UTC(2021, 8, 17), 2505],
        [Date.UTC(2021, 8, 18), 4933]
        ],data2:[
          [Date.UTC(2021, 8, 12), 1234],
          [Date.UTC(2021, 8, 13), 2202],
          [Date.UTC(2021, 8, 14), 3000],
          [Date.UTC(2021, 8, 15), 3000],
          [Date.UTC(2021, 8, 16), 2345],
          [Date.UTC(2021, 8, 17), 3000],
          [Date.UTC(2021, 8, 18), 2505]]
      },
      {id: 3, chartName: 'Lithium', chartType: 'pie', chartColorA: '#FF530D',chartColorB: '#6610f2', chartDate:'2023-10-06',data1:[
        [Date.UTC(2021, 8, 12), 2202],
        [Date.UTC(2021, 8, 13), 1234],
        [Date.UTC(2021, 8, 14), 1245],
        [Date.UTC(2021, 8, 15), 3000],
        [Date.UTC(2021, 8, 16), 2345],
        [Date.UTC(2021, 8, 17), 2505],
        [Date.UTC(2021, 8, 18), 4933]
      ],data2:[
          [Date.UTC(2021, 8, 12), 1234],
          [Date.UTC(2021, 8, 13), 2202],
          [Date.UTC(2021, 8, 14), 3000],
          [Date.UTC(2021, 8, 15), 3000],
          [Date.UTC(2021, 8, 16), 2345],
          [Date.UTC(2021, 8, 17), 3000],
          [Date.UTC(2021, 8, 18), 2505]]
      }
    ]
};


export const reducers = createReducer(
  initialState,
  on(ChartActions.getChartList, (state) => ({
    ...state,
  })),

  on(ChartActions.postChartList, (state, action) => {
    state = {
      ...state,
      chartInfoList: [...state.chartInfoList, action.chartInfoList]
    }

    return state;
  }),

  on(ChartActions.updateItemFromChartList, (state, action) => {
    const chartitems = [...state.chartInfoList];
   
    const updatedchartList = chartitems.map(
      x => action.chartInfo.id === x.id ? action.chartInfo : x);

    state = {
      ...state,
      chartInfoList: updatedchartList
    }

    return state;
  }),
  
  on(ChartActions.removeItemFromChartList, (state, action) => {
    const chartitems = [...state.chartInfoList];
    const index = chartitems.findIndex(x => x.id === action.chartInfo.id);
    chartitems.splice(index, 1);
    
    state = {
      ...state,
      chartInfoList: chartitems
    }

    return state;
  }),
);