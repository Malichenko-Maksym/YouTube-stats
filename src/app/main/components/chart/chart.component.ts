import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: false,
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  @Input()
  statistics: object = {};

  keys: string[] = [];
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };

  ngOnInit() {
    this.keys = Object.keys(this.statistics);

    this.lineChartData = {
      labels: this.keys,
      datasets: [
        {
          data: Object.values(this.statistics),
          label: 'Amount',
          fill: false,
          tension: 0.1,
          borderColor: '#600000',
          backgroundColor: '#600000',
        },
      ],
    };
  }

  title = 'statistics-chart';

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = false;
}
