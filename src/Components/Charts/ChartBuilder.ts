import { ChartSerie, ChartData } from "../../interfaces/Charts/Charts";

export default class ChartBuilder {
  private chartType: ChartData['chartType'];
  private isHorizontal: boolean = false;
  private isStacked: boolean = false;
  private showDataLabels: boolean = false;
  private series: ChartSerie[] = [];
  constructor(chartType: ChartData['chartType']) {
    this.chartType = chartType;
  }

  public withSeries(s: ChartSerie[]) {
    this.series = s;
    return this;
  }

  public horizontal() {
    this.isHorizontal = true;
    return this;
  }

  public stacked() {
    this.isStacked = true;
    return this;
  }

  public dataLabels() {
    this.showDataLabels = true;
    return this;
  }

  public build() {
    return {
      chartType: this.chartType as any,
      options: {
        plotOptions: {
          bar: {
            horizontal: this.isHorizontal
          }
        },
        chart: {
          stacked: this.isStacked
        },
        dataLabels: { enabled: this.showDataLabels }
      },
      series: this.series
    };
  }
}
