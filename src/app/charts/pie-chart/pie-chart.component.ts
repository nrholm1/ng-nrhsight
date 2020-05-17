import { Component, OnInit, Input, ComponentFactoryResolver } from '@angular/core';
import { THEME_COLORS } from 'src/app/shared/theme.colors';

const theme = "Bright";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  @Input() inputData: any;
  @Input() limit: any;

  // pieChartData: number[] = [350, 450, 120];
  // pieChartLabels: string[] = ["Bob Jones Ltd","Acme Hosting","Bugs B GmBH"];
  pieChartData: number[];
  pieChartLabels: string[];
  pieChartColors: any[] = [
    {
      backgroundColor: this.themeColors(theme),
      borderColor: "#111"
    }
  ];
  pieChartType = "doughnut";
  

  ngOnInit(): void {
    this.parseChartData(this.inputData, this.limit);
  }

  parseChartData(res: any, limit?: number): void {
    const allData = res.slice(0, limit);
    console.log(allData);

    this.pieChartLabels = allData.map(x => x['name'] || x['state']); // could also use library lodash
    this.pieChartData = allData.map(x => x['total']);
  }

  themeColors(setName: string): string[] {
    const c = THEME_COLORS.slice(0)
      .find(set => set.name === setName).colorSet;
    
    return c;
  }
}
