import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartViewModeComponent } from './chart-view-mode/chart-view-mode.component';
import { ChartSettingsComponent } from './chart-settings/chart-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartRoutingModule } from './chart-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { MaterialModule } from '../material/material.module';
import { ChartListInfoComponentComponent } from './chart-list-info-component/chart-list-info-component.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartComponent } from './highchart/highchart.component';
import { NgxColorsModule } from 'ngx-colors';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    ChartComponent,
    ChartViewModeComponent,
    ChartListInfoComponentComponent,
    ChartSettingsComponent,
    ChartListInfoComponentComponent,
    HighchartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HighchartsChartModule,
    NgxColorsModule,
    ChartRoutingModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    MDBBootstrapModule.forRoot(),
  ]
})
export class ChartModule { }
