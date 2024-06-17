import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
  ApexAnnotations
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  annotations: ApexAnnotations;
}

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html'
})
export class TopThreeProductsComponent implements OnInit {
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Lenova Thinkpad E15',
          data: [395],
          color: '#044342',
        },
        {
          name: 'Nectar Orange Juice',
          data: [385],
          color: '#7e0505',
        },
        {
          name: 'Axe Deodarant',
          data: [275],
          color: '#ed9e20',
        },
      ],
      chart: {
        type: 'bar',
        height: 225,
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      },
      title: {
        text: 'Top 3 Products'
      },
      xaxis: {
        categories: [
          'Lenova Thinkpad E15',
          'Nectar Orange Juice',
          'Axe Deodarant',
        ]
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      annotations: {
        xaxis: [
          {
            x: 'Lenova Thinkpad E15',  // Adjust this value to match one of the categories
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              orientation: 'horizontal',
              text: 'X Annotation'
            }
          }
        ]
      }
    };
  }

  ngOnInit(): void {}
}
