import { PieChart } from "./Pie/declarations";
import { ChartData } from "./declarations";

interface Map {
  [index: string]: any;
}

export default class ChartFactory {
  public static build(
    options: ChartData["options"],
    series: ChartData["series"],
    chartType: ChartData["chartType"]
  ) {
    const chartMap: Map = {
      bar: ChartFactory.barChart,
      pie: ChartFactory.pieChart,
      stacked: ChartFactory.stackedChart
    };
    return chartMap[chartType!]({ options, series });
  }
    
  private static barChart(chartData: ChartData) {
    // return new BarChart(chartData);
    return {
      options: chartData.options,
      series: chartData.series,
    };
  }

  private static stackedChart(chartData: ChartData) {
    chartData = ChartFactory.barChart(chartData);
    chartData.options = {
      ...chartData.options,
      chart: {
        stacked: true,
        foreColor: '#111',
      },
      colors: ["#880000", "#008800"],
      fill: {
        colors: ["#990000", "#009900",],
      },
    }
    return {
      options: chartData.options,
      series: chartData.series,
    };
  }

  private static pieChart(chartData: PieChart) {
    return {
      options: chartData.options,
      series: chartData.series,
    };
  }
}

class BarChart {
  private options: any;
  private series: any;
  constructor(chartData: ChartData) {
    this.options = chartData.options;
    this.series = chartData.series;
  }
}