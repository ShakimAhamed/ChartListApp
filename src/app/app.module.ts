import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/auth.reducer';
import { HighchartsChartModule } from 'highcharts-angular';
import { ConfirmationComponent } from './Confirmation/confirmation/confirmation.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';
@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ColorPickerModule,
    NgxColorsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ chartInfoList:reducers}),
    IonicStorageModule.forRoot(), 
    HighchartsChartModule,
    BrowserAnimationsModule,RouterModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
