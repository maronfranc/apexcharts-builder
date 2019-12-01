export default class ChartBuilder {
  private type: string;
  private isHorizontal: boolean = false;
  private isStacked: boolean = false;
  private showDataLabels: boolean = false;

  constructor(type: string) {
    this.type = type;
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
      plotOptions: {
        bar: {
          horizontal: this.isHorizontal
        }
      },
      chart: {
        stacked: this.isStacked
      },
      dataLabels: { enabled: this.showDataLabels }
    };
  }
}
