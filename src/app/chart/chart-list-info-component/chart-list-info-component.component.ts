import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/model/chartlistinfo.modal';
import * as ChartAction from '../../state/auth.action';  
import { chartSelector } from 'src/app/state/auth.selectors';
import { ColorPickerService,Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-chart-list-info-component',
  templateUrl: './chart-list-info-component.component.html',
  styleUrls: ['./chart-list-info-component.component.css']
})
export class ChartListInfoComponentComponent {

  chartListInfoForm!:FormGroup;
  // public color9: string = '#278ce2';
  inputData: any;
  //pre-define allowed array date and value
  arrayAllowed:any = [
    [Date.UTC(2021, 8, 12), 2202],
    [Date.UTC(2021, 8, 13), 1234],
    [Date.UTC(2021, 8, 14), 1245],
    [Date.UTC(2021, 8, 15), 3000],
    [Date.UTC(2021, 8, 16), 2345],
    [Date.UTC(2021, 8, 17), 2505],
    [Date.UTC(2021, 8, 18), 4933],
  ];

  //pre-define denied array date and value
  arrayDenied:any = [
    [Date.UTC(2021, 8, 12), 1234],
    [Date.UTC(2021, 8, 13), 2202],
    [Date.UTC(2021, 8, 14), 3000],
    [Date.UTC(2021, 8, 15), 3000],
    [Date.UTC(2021, 8, 16), 2345],
    [Date.UTC(2021, 8, 17), 3000],
    [Date.UTC(2021, 8, 18), 2505]
  ];

  listOfChartType:any = [
    {'id':1,'value':'spline','name':'Spline'},
    {'id':2,'value':'line','name':'Line'},
    {'id':3,'value':'pie','name':'Pie'},
    {'id':4,'value':'bar','name':'Bar'},
    {'id':5,'value':'area','name':'Area'},
    {'id':6,'value':'column','name':'Column'}
  ];

  constructor(
    public dialogRef: MatDialogRef<ChartListInfoComponentComponent>,
    private store: Store<AppStateInterface>,
    private fb: FormBuilder,
    private cpService: ColorPickerService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.inputData = data;
     }

     ngOnInit() {
      this.initFrom();
      if (this.inputData.id != 0) {
        this._renderChartListInfo(this.inputData.id,this.inputData.from);
      }
  
    }

    _renderChartListInfo(id:any,model:any):void{
      this.chartListInfoForm.patchValue(Object.assign({}, model));
    }
    

    initFrom() {
      this.chartListInfoForm = this.fb.group({
        id: 0,
        chartName: ['', [Validators.required]],
        chartType: ['', [Validators.required]],
        chartColorA: ['#FF530D', [Validators.required]],
        chartColorB: ['#6610f2', [Validators.required]],
        chartDate: ['', [Validators.required]],
        data1:[],
        data2:[]
      });
    }
    // #278ce2


    close():void{
      this.dialogRef.close();
    }


    save():void{
      let selectedValue = this.chartListInfoForm.value;
      let storeAllData:any = [];
      this.store.select(chartSelector).subscribe(
        (chartInfoList
          ) => {
          if (chartInfoList) {
            storeAllData = JSON.parse(JSON.stringify(chartInfoList));
          }
        },
        (error) => {
          console.error(error);
        }
      );

      if(selectedValue.id == 0){
        selectedValue.id = storeAllData.length + 1;
        selectedValue.data1 = this.arrayAllowed;
        selectedValue.data2 = this.arrayDenied;
        this.store.dispatch(ChartAction.postChartList({chartInfoList: selectedValue}));
      }
      else{
        this.store.dispatch(ChartAction.updateItemFromChartList({chartInfo: selectedValue}));
      }
      this.dialogRef.close(true);
    }

}
