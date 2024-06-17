import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent implements OnInit {
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Arizona",
          data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
        },
        {
          name: 'Connecticut',
          data: [47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159]
        },
        {
          name: 'Ohio',
          data: [17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59]
        }
      ],
      chart: {
        type: 'line',
        height: 325
      },
      title: {
        text: 'Month wise sales'
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      },
      yaxis: {
        title: {
          text: 'Revenue in $'
        }
      }
    };
  }

  ngOnInit(): void {}
}
