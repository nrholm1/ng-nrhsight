import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [55,43,32,56,34,65], label: "Sentiment Analysis"},
  { data: [34,47,65,67,45,87], label: "Image Recognition"},
  { data: [65,45,86,64,78,88], label: "Forecasting"}
];

const LINE_CHART_LABELS: string[] = ["Jan","Feb","Mar","Apr","May","June"];


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  }
  lineChartLegend: true;
  lineChartType = "line";
  lineChartColors = LINE_CHART_COLORS;
}
