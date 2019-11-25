import { PieChart } from "./Pie/declarations";
import { ChartData } from "./declarations";

interface Map {
  [index: string]: any;
}

export default class ChartsFactory {
  public static build(
    options: ChartData["options"],
    series: ChartData["series"],
    chartType: ChartData["chartType"]
  ) {
    const chartMap: Map = {
      bar: this.barChart,
      pie: this.pieChart,
      stacked: this.stackedChart
    };
    return chartMap[chartType]({ options, series, chartType });
  }
    
  private static barChart(chartData: ChartData) {
    return {
      options: chartData.options,
      series: chartData.series,
      chartType: chartData.chartType
    };
  }

  private static stackedChart(chartData: ChartData) {
    let data = this.barChart(chartData);
    // configuração para stacked aqui vai ser adicionada ao barChart
    return {
      options: data.options,
      series: data.series,
      chartType: data.chartType
    };
  }

  private static pieChart(chartData: PieChart) {
    return {
      options: chartData.options,
      series: chartData.series,
      chartType: chartData.chartType
    };
  }
}
