import { ApexOptions, ChartSerie } from "../declarations";

export type BarChartType = "bar" | "line";

export interface BarChart {
  series: ChartSerie[],
  options: ApexOptions
  chartType?: BarChartType,
}

