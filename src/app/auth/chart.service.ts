import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChartListInfo } from '../model/chartlistinfo.modal';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  // private ELEMENT_DATA: ChartListInfo[] = [
  //   {id: '1', chartName: 'Hydrogen', chartType: 'spline', chartColor: 'H',value:'16.34', chartDate:'2022-01-01'},
  //   {id: '2', chartName: 'Helium', chartType: 'spline', chartColor: 'He', value:'12.34',chartDate:'2023-01-01'},
  //   {id: '3', chartName: 'Lithium', chartType: 'spline', chartColor: 'Li', value:'156.34',chartDate:'2021-01-01'},
  //   {id: '4', chartName: 'Beryllium', chartType: 'spline', chartColor: 'Be',value:'111.34', chartDate:'2019-01-01'},
  //   {id: '5', chartName: 'Boron', chartType: 'spline', chartColor: 'B', value:'12.44',chartDate:'2018-01-01'}
  // ];

  constructor(private http: HttpClient) { }

  getChartist() {
    const endpoint = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@c55c2f39d531b227dc239d2d63d6eef882260cb6/samples/data/worldbank-norway.json';
    // const endpoint = 'https://dummy.restapiexample.com/api/v1/employees';

    // return this.http.get(endpoint);

    return [
      {id: '1', chartName: 'Hydrogen', chartType: 'spline', chartColor: 'H',value:'16.34', chartDate:'2022-01-01'},
      {id: '2', chartName: 'Helium', chartType: 'spline', chartColor: 'He', value:'12.34',chartDate:'2023-01-01'},
      {id: '3', chartName: 'Lithium', chartType: 'spline', chartColor: 'Li', value:'156.34',chartDate:'2021-01-01'},
      {id: '4', chartName: 'Beryllium', chartType: 'spline', chartColor: 'Be',value:'111.34', chartDate:'2019-01-01'},
      {id: '5', chartName: 'Boron', chartType: 'spline', chartColor: 'B', value:'12.44',chartDate:'2018-01-01'}
    ]

    // return this.ELEMENT_DATA;
  }
}
