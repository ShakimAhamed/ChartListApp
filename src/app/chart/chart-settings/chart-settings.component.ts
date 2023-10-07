
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface, ChartListInfo } from 'src/app/model/chartlistinfo.modal';
import { ChartListInfoComponentComponent } from '../chart-list-info-component/chart-list-info-component.component';
import { ComponentType } from '@angular/cdk/portal';
import * as ChartAction from '../../state/auth.action';  
import { chartSelector } from 'src/app/state/auth.selectors';
import { ConfirmationComponent } from 'src/app/Confirmation/confirmation/confirmation.component';
@Component({
  selector: 'app-chart-settings',
  templateUrl: './chart-settings.component.html',
  styleUrls: ['./chart-settings.component.css'],
})
export class ChartSettingsComponent {
  chartListDetails$!: Observable<ChartListInfo[]>;

  chartListInfoForm!: FormGroup;

  constructor(
    private store: Store<AppStateInterface>,
    private fb: FormBuilder,
    public dialog: MatDialog,)
    {
      const dateFormat = 'yyyy-MM-dd';
      
      this._ViewChartList();
      
      
    }

  displayedColumns: string[] = ['sl', 'chartName', 'chartType', 'chartColorA','chartColorB','chartDate','action'];
  dataSource = new MatTableDataSource<ChartListInfo>();
 
  ngOnInit() { 
    this.initFrom();
  }

  initFrom() {
    this.chartListInfoForm = this.fb.group({
      id: 0,
      chartName: ['', [Validators.required]],
      chartType: ['', [Validators.required]],
      chartColorA: ['', [Validators.required]],
      chartColorB: ['', [Validators.required]],
      chartDate: ['', [Validators.required]],
      data1:[],
      data2:[]
    });
  }

  deleteChart(data:any,actionType:string) {

    this.openConfirmationDialog('Do you want to delete this item?', (res: any) => {
      res &&
      this._DeleteChartList(data);
    });


  }

  _DeleteChartList(data: any){
    this.store.dispatch(ChartAction.removeItemFromChartList({chartInfo: data}));
    this._ViewChartList();
  }

  editChart(data:any,actionType:string) {
    this.chartListInfoForm.patchValue({
      id: data.id,
      chartName: data.chartName,
      chartType: data.chartType,
      chartColorA: data.chartColorA,
      chartColorB: data.chartColorB,
      chartDate: data.chartDate,
      data1:data.data1,
      data2:data.data2
    });
    this.openWindow(data.id,actionType);
  }

  addChart():void{
    this.openWindow(0,'add');
  }

  openWindow(value:any,actionType:string):void{
    this.openDynamicModal({ id: value,mode: actionType,from: this.chartListInfoForm.value },
      ChartListInfoComponentComponent, 'auto', '1000px', (res: any) => {
        res &&
          this._ViewChartList();
      });
  }

  _ViewChartList():void{

    this.store.select(chartSelector).subscribe(
			(chartInfoList
        ) => {
				if (chartInfoList) {
          this.chartListDetails$ = JSON.parse(JSON.stringify(chartInfoList));
          this.dataSource = new MatTableDataSource(chartInfoList);
				}
			},
			(error) => {
				console.error(error);
			}
		);

  }

  openDynamicModal(data: { id: any; mode: string, from: any; }, component: ComponentType<unknown>, height: string, width: string, func: { (res: any): void; (arg0: any): void; }) {
    let dialogRef = this.dialog.open(component, {
        position: { top: '65px' },
        height: height,
        width: width,
        maxWidth: width,
        disableClose: true,
        data: data
    });
    dialogRef.afterClosed().subscribe(result => {
        func(result);
    });
  }

  openConfirmationDialog(message: string, func: { (res: any): void; (arg0: any): void; }) {
    let dialogRef = this.dialog.open(ConfirmationComponent, {
        position: { top: '65px' },
        height: 'auto',
        width: '500px',
        data: message
    });
    dialogRef.afterClosed().subscribe(result => {
        func(result);
    });
  }

}


