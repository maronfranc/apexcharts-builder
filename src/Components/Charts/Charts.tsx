import React from "react";
import Chart from "react-apexcharts";
import { ChartData } from "./declarations";
import ChartsFactory from "./ChartFactory";

export default function Charts(chart: ChartData) {

  const teste = ChartsFactory.build(chart.options, chart.series, "stacked");
  const teste2 = ChartsFactory.build(chart.options, chart.series, "bar");
  return (
    <>
      <Chart
        key={teste.name}
        options={teste.options}
        series={teste.series}
        type={"bar"}
        width={600}
      />
      <Chart
        key={teste2.name}
        options={teste2.options}
        series={teste2.series}
        type={"bar"}
        width={600}
      />
    </>
  );
}
