import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface, ChartListInfo } from 'src/app/model/chartlistinfo.modal';
import { chartSelector } from 'src/app/state/auth.selectors';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { FormControl, FormGroup } from '@angular/forms';
HC_exporting(Highcharts);

@Component({
  selector: 'app-chart-view-mode',
  templateUrl: './chart-view-mode.component.html',
  styleUrls: ['./chart-view-mode.component.css']
})
export class ChartViewModeComponent {
  Highcharts: typeof Highcharts = Highcharts;
  highcharts = Highcharts;

  chartLists!:any[];
  range = new FormGroup({
    startDate: new FormControl<Date | null>(new Date('2023-06-01')),
    endDate: new FormControl<Date | null>(new Date('2023-12-31')),
  });

  chartOptions:any;
  constructor(private route: ActivatedRoute,
    private store: Store<AppStateInterface>,) {
      this._ViewChartList();
    }
  ngOnInit(): void {
    this._dateRangeChange(this.range.value.startDate,this.range.value.endDate);
  }


  _ViewChartList():void{
    this.store.select(chartSelector).subscribe(
			(chartInfoList
        ) => {
				if (chartInfoList) {
          this.chartLists = JSON.parse(JSON.stringify(chartInfoList));
				}
			},
			(error) => {
				console.error(error);
			}
		);
  }

  _filterList (event:any){
    this._ViewChartList();
    if(event.value > 0){
      this.chartLists = this.chartLists.filter(ex=> ex.id == event.value);
    }

  }

  _dateRangeChange(StartDate:any, EndDate:any){
    this._ViewChartList();

    let compareStartDate = new Date(StartDate).getTime();
    let compareEndDate = new Date((EndDate).setHours(23,59,59,999)).getTime();

    this.chartLists = this.chartLists.filter(d => {
      var time = new Date(d.chartDate).getTime();
      return (time >= compareStartDate && time <= compareEndDate);
     });

  }
}
