import { Options, ChartSerie } from "./Charts";

export type PieChartType = "pie" | "donut";

export interface PieChart {
  series: ChartSerie[],
  options: Options
  chartType?: PieChartType,
}