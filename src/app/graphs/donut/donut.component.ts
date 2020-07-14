import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'App-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {
  public donutChartOptions: ChartOptions = {
    responsive: true,
  };
  public donutChartLabels: Label[] = ['Confirmados', 'Recuperados', 'Activos', 'Defunciones'];
  public donutChartData: MultiDataSet = [
    [300, 500, 100],
    [300, 500, 100]
  ];
  public donutChartType: ChartType = 'doughnut';
  public donutChartLegend = true;
  public donutChartPlugins = [];
  public donutChartColors: any = [
    {
      backgroundColor: [
        'rgba(136,136,136,0.9)',
        'rgba(0,210,0,0.9)',
        'rgba(255,200,0,0.9)',
        'rgba(240,0,0,0.9)',
      ]
    },
    {
      backgroundColor: [
        'rgba(136,136,136,0.9)',
        'rgba(0,210,0,0.9)',
        'rgba(255,200,0,0.9)',
        'rgba(240,0,0,0.9)',
      ]
    }
  ];
  countries: string[] = [];
  country1: string = null;
  country2: string = null;

  constructor(
    private covidService: CovidService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }
  getCountries(): void {
    this.covidService.getAll().subscribe(
      data => {
        this.countries = Object.keys(data);
      }
    )
  }
  loadData(event: any): void {
    if (this.country1 && this.country2) {
      this.clear();
      forkJoin([
        this.covidService.fromCountry(this.country1),
        this.covidService.fromCountry(this.country2)
      ]).subscribe(([data1, data2]) => {
        const json1 = data1.pop();
        const json2 = data2.pop();
        this.donutChartData[0][0] = json1.confirmed;
        this.donutChartData[0][1] = json1.recovered;
        this.donutChartData[0][2] = json1.confirmed - json1.recovered - json1.deaths;
        this.donutChartData[0][3] = json1.deaths;
        this.donutChartData[1][0] = json2.confirmed;
        this.donutChartData[1][1] = json2.recovered;
        this.donutChartData[1][2] = json2.confirmed - json2.recovered - json2.deaths;
        this.donutChartData[1][3] = json2.deaths;
        console.log(json1);
        console.log(json2);

      });
    }
  }
  clear(): void {
    this.donutChartData = [];
    this.donutChartData.push([]);
    this.donutChartData.push([]);
  }
}
