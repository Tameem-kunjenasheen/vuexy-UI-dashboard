
import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';

export type ChartOptions = {
  series: number[];
  chart: ApexChart;
  title: ApexTitleSubtitle;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent implements OnInit {
  public chartOptions: ChartOptions;
  constructor() {
    this.chartOptions = {
      series: [41.0, 33.8, 6.5, 15.2, 3.5],
      chart: {
        type: 'pie',
        height: 325
      },
      title: {
        text: 'Category wise sales'
      },
      labels: ['Electronics', 'Groceries', 'Cosmetics', 'Clothes', 'Appliances'],
      colors: ['#044342', '#7e0505', '#ed9e20', '#6920fb', '#121212'],
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          return opts.w.globals.labels[opts.seriesIndex] + ": " + val + "%";
        },
        style: {
          colors: ['#044342', '#7e0505', '#ed9e20', '#6920fb', '#121212'],
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + "%";
          }
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
