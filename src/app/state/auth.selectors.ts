import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../model/chartlistinfo.modal";

export const selectFeature = (state: AppStateInterface) => state.chartInfoList;
export const chartSelector = createSelector(
    selectFeature,
    (state) => state.chartInfoList
  );