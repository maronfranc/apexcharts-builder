import React from "react";
import Chart from "react-apexcharts";

import { BarChart } from "./declarations";

export default function Bar({options, series}: BarChart) {
  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width="500"
    />
  );
}
