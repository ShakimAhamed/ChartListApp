
import { createAction, props } from '@ngrx/store';
import { ChartListInfo } from '../model/chartlistinfo.modal';


export const getChartList = createAction(
  '[Chart] Get Chart Items',
);

export const postChartList = createAction(
  '[Chart] Post Chart',
  props<{ chartInfoList: ChartListInfo }>()
);

export const removeItemFromChartList = createAction(
  '[Chart] Remove Item from Chart',
  props<{ chartInfo: ChartListInfo }>()
);

export const updateItemFromChartList = createAction(
  '[Chart] Update Item from Chart',
  props<{ chartInfo: ChartListInfo }>()
);