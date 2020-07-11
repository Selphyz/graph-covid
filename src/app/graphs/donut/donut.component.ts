import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'App-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {
  public donutChartOptions: ChartOptions = {
    responsive: true,
  };
  public donutChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public donutChartData: SingleDataSet = [300, 500, 100];
  public donutChartType: ChartType = 'doughnut';
  public donutChartLegend = true;
  public donutChartPlugins = [];
  constructor() { }

  ngOnInit(): void {
  }

}
