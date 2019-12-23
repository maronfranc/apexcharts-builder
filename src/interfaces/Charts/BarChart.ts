import { Options, ChartSerie } from "./Charts";

export type BarChartType = "bar" | "line";

export interface BarChart {
  series: ChartSerie[],
  options: Options
  chartType?: BarChartType,
}

