import React from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import "./App.css";
import { barData } from "./dummy/barData";
import ChartBuilder from "./Components/Charts/ChartBuilder";
import ChartFactory from "./Components/Charts/ChartFactory";
import { ChartData } from "./interfaces/Charts/Charts";
import { dummyData } from "./dummy/dummyData";

const builtBar = new ChartBuilder({
  chartType: "bar",
  series: dummyData.series,
  options: {
    xaxis: dummyData.xaxis,
  }
})
  .horizontalBar()
  .stacked()
  .showDataLabels()
  .build();
console.log("built bar: ", builtBar);

const builtPie = new ChartBuilder({
  chartType: "pie",
  series: dummyData.series[0].data,
  options: {
    labels: dummyData.labels
  }
}).build();
console.log("built bar: ", builtPie);

const factory = ChartFactory.build(barData as ChartData, "bar");
console.log("factory: ", factory);

const App: React.FC = () => {
  return (
    <div className={"App"}>
      <h1>Builder</h1>
      <h3>Bar</h3>
      <Chart
        options={builtBar.options as ApexCharts.ApexOptions}
        series={builtBar.series as ApexCharts.ApexOptions["series"]}
        type={builtBar.chartType}
      />
      <h3>Pie</h3>
      <Chart
        options={builtPie.options as ApexCharts.ApexOptions}
        series={builtPie.series as ApexCharts.ApexOptions["series"]}
        type={builtPie.chartType}
      />
      <hr />
      <h1>Factory</h1>
      <Chart
        options={factory.options as ApexCharts.ApexOptions}
        series={factory.series as ApexCharts.ApexOptions["series"]}
        type={factory.chartType}
      />
    </div>
  );
};

export default App;
