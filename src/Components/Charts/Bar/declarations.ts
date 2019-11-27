import { Options, ChartSerie } from "../declarations";

export type BarChartType = "bar" | "line";

export interface BarChart {
  series: ChartSerie[],
  options: Options
  chartType?: BarChartType,
}

