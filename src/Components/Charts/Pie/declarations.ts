import { ApexOptions, ChartSerie } from "../declarations";

export type PieChartType = "pie" | "donut";

export interface PieChart {
  series: ChartSerie[],
  options: ApexOptions
  chartType?: PieChartType,
}