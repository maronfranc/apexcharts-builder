import { Options, ChartSerie } from "../declarations";

export type PieChartType = "pie" | "donut";

export interface PieChart {
  series: ChartSerie[],
  options: Options
  chartType?: PieChartType,
}