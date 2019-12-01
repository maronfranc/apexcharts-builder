import React from "react";
import Chart from "react-apexcharts";
import "./App.css";
import { barData } from "./dummy/barData";
import Charts from "./Components/Charts/Charts";
import ChartBuilder from "./Components/Charts/ChartBuilder";

const chartType = "bar";
const built = new ChartBuilder(chartType)
  .withSeries(barData.series)
  .horizontal()
  .stacked()
  .dataLabels()
  .build();
console.log(built);

const App: React.FC = () => {
  return (
    <div className={"App"}>
      <h1>Factory</h1>
      <Chart options={built.options as any} series={built.series} type={chartType} />
    </div>
  );
};

export default App;
