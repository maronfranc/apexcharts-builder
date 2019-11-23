import { ApexOptions, ChartSerie } from "../declarations";

export type PieChartType = "pie" | "donut";

export interface PieChart {
  type?: PieChartType,
  series: ChartSerie[],
  options: ApexOptions
}