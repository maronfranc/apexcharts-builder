export type PieChartType = "pie" | "donut";

export interface PieChart {
  series: number[];
  options: {
    labels: string[];
  };
  chartType?: PieChartType;
}
