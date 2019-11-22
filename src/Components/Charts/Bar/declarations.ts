import { ApexOptions, ChartSerie } from "../declarations";

type ChartType = "bar" | "line";

export interface BarChart {
  type?: ChartType,
  series: ChartSerie[],
  options: ApexOptions
}