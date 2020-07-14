import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'App-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Totales', 'Recuperados', 'Activos', 'Fallecidos'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: any = [
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
  country: string = null;
  constructor(
    private covidService: CovidService
  ) { }

  ngOnInit(): void {
    this.getCountries();
  }
  loadData(event: any): void {
    if (this.country) {
      this.clear();
      this.covidService.fromCountry(this.country).subscribe(data => {
        const covid = data.pop();
        this.pieChartData[0] = covid.confirmed;
        this.pieChartData[1] = covid.recovered;
        this.pieChartData[2] = covid.confirmed - covid.recovered - covid.deaths;
        this.pieChartData[3] = covid.deaths;
      });
    }
  }
  clear(): void {
    this.pieChartData = [];
  }
  getCountries(): void {
    this.covidService.getAll().subscribe(
      data => {
        this.countries = Object.keys(data);
      }
    );
  }
}
