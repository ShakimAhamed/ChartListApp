import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthResolver } from './auth/auth.resolver';

const routes: Routes = [
  { path: 'chart', 
    loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule),resolve: { data: AuthResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
