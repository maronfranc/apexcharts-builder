import { ChartSerie } from "./declarations";

export default class ChartBuilder {
  private type: string;
  private isHorizontal: boolean = false;
  private isStacked: boolean = false;
  private showDataLabels: boolean = false;
  private series: ChartSerie[] = [];
  constructor(type: string) {
    this.type = type;
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
