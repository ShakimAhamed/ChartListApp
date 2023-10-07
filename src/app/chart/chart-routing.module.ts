import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart.component';
import { ChartViewModeComponent } from './chart-view-mode/chart-view-mode.component';
import { ChartSettingsComponent } from './chart-settings/chart-settings.component';
import { AuthResolver } from '../auth/auth.resolver';

const routes: Routes = [
  { path: '', component: ChartComponent,
   children: [
    {
      path: 'view-mode',
      component: ChartViewModeComponent,resolve: { data: AuthResolver }
    },
    {
      path: 'settings',
      component: ChartSettingsComponent,resolve: { data: AuthResolver }
    }
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }