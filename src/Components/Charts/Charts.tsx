import React from "react";
import Chart from "react-apexcharts";
import { ChartData } from "./declarations";
import ChartsFactory from "./ChartsFactory";


export default function Charts(chart: ChartData) {
  const teste = ChartsFactory.build(chart.options, chart.series, chart.chartType); 
  return (
    <Chart
      key={teste.name}
      options={teste.options}
      series={teste.series}
      type={teste.chartType}
      width={600}
    />
  );
}
