import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ChartService } from './chart.service';
import { Observable, catchError, of } from 'rxjs';
import { inject } from '@angular/core';

// export class AuthResolver implements Resolve<any> {
//   constructor(private chartService: ChartService) {}
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
     
//     return this.chartService.getChartist().pipe(catchError(() => {
//       return of('Data not found');
//     }));
//   }
  
// }

export const AuthResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  
  return inject(ChartService).getChartist();
};
