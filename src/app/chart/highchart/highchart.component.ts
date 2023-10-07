import { Component, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent {

  Highcharts: typeof Highcharts = Highcharts;
  @Input() data1!: Array<any>;
  @Input() data2!: Array<any>;
  @Input() listObj!:any;
  updateFlag = false;

  colors:any = [];
  // colors:any = ['#FF530D', '#E82C0C', '#FF0000', '#E80C7A', '#E80C7A'];

  chartOptions: Options = {
    chart: {
      type: 'spline',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
      },
      width: 500,
      height: 400,
    },
    title: {
      text: '',
      align: 'left'
    },
    subtitle: {
      text: '',
      align: 'left'
    },
    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify',
        // formatter: function() {
        //   return Highcharts.dateFormat('%m/%d/%Y', this.value);
        // }
      },
      startOnTick: true,
      showFirstLabel: false,
      minorTickLength: 0,
      tickLength: 0,
      // categories: null
    },
    yAxis: {
      title: {
        text: ''
      },
      minorGridLineWidth: 0,
      gridLineWidth: 1,
      // alternateGridColor: null,
    },
    tooltip: {
      valueSuffix: ' k'
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      /* symbolRadius: 0, */
      symbolHeight: 12,
      symbolWidth: 12,
      symbolRadius: 0
    },
    plotOptions: {
      series: {
        findNearestPointBy: 'x',
        label: {
          enabled: false,
          connectorAllowed: false
        },
        pointPlacement: 'on',
        pointStart: Date.UTC(2021, 8, 12)
      },
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        }
      },
    },
    series: [{
        name: 'Allowed Request',
        type: 'area',
        data: []
      },
      {
        name: 'Denied Request',
        type: 'area',
        data: []
      }
    ],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  }


  ngOnInit(){
    // console.log(this.listObj);
  }


  ngOnChanges(change: SimpleChanges) {
    this.chartOptions.title = {
      text: this.listObj.chartName ? this.listObj.chartName : null
    };

    this.chartOptions.subtitle = {
      text: new Date(this.listObj.chartDate).toDateString(),
    };
    
 
    this.chartOptions.series = [{
      name: 'Allowed Request',
      // color: '#FF530D',
      color: this.listObj.chartColorA,
      type: this.listObj.chartType,
      data: change['data1'].currentValue,
    },
    {
      name: 'Denied Request',
      // color: '#6610f2',
      color: this.listObj.chartColorB,

      type: this.listObj.chartType,
      data: change['data2'].currentValue,
    }];

    this.updateFlag = true;
  }
}
