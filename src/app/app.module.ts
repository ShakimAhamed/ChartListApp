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
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCmQ2TYK0X62dq2qEY6ymjQw7jd-M-WV78",
  authDomain: "chart-app-3ff56.firebaseapp.com",
  projectId: "chart-app-3ff56",
  storageBucket: "chart-app-3ff56.appspot.com",
  messagingSenderId: "394745436532",
  appId: "1:394745436532:web:187ea3a2d253aa670a7421",
  measurementId: "G-7PHCFN6WGF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
