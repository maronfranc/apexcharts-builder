import React from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import "./App.css";
import { barData } from "./dummy/barData";
import ChartBuilder from "./Components/Charts/ChartBuilder";
import ChartFactory from "./Components/Charts/ChartFactory";
import { ChartData } from "./interfaces/Charts/Charts";

const built = new ChartBuilder("bar")
  .withSeries(barData.series)
  .horizontal()
  .stacked()
  .dataLabels()
  .build();
console.log("built: ", built);

const factory = ChartFactory.build(barData as ChartData, "bar");
console.log("factory: ", factory);

const App: React.FC = () => {
  return (
    <div className={"App"}>
      <h1>Builder</h1>
      <Chart
        options={built.options as ApexCharts.ApexOptions}
        series={built.series as ApexCharts.ApexOptions["series"]}
        type={built.chartType}
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
