import { ChartData } from "../../interfaces/Charts/Charts";
import { Dictionary } from "../../interfaces/Dictionary";

export default class ChartFactory {
  public static build(chartData: ChartData, chartType: ChartData["chartType"]) {
    const chartDictionary: Dictionary = {
      bar: ChartFactory.barChart,
      pie: ChartFactory.pieChart,
      stacked: ChartFactory.stackedChart
    };
    return chartDictionary[chartType!](chartData, chartType);
  }

  private static barChart(chartData: ChartData, chartType: ChartData['chartType']): ChartData {
    return {
      chartType: chartType,
      options: chartData.options,
      series: chartData.series
    };
  }

  private static stackedChart(chartData: ChartData, chartType: ChartData['chartType']): ChartData {
    chartData = ChartFactory.barChart(chartData, chartType);
    chartData.options = {
      ...chartData.options,
      chart: {
        stacked: true,
        foreColor: "#111"
      },
      colors: ["#880000", "#008800"],
      fill: {
        colors: ["#990000", "#009900"]
      }
    };
    return {
      chartType: chartType,
      options: chartData.options,
      series: chartData.series
    };
  }

  private static pieChart(chartData: ChartData, chartType: ChartData['chartType']): ChartData {
    return {
      chartType: chartType,
      options: chartData.options,
      series: chartData.series
    };
  }
}
