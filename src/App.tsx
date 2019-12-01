import React, { useState } from "react";
import Chart from 'react-apexcharts';
import "./App.css";
import { barData } from "./dummy/barData";
import Charts from "./Components/Charts/Charts";
import withChartsFunction from "./Components/Charts/hoc/withChartFunction";
import ChartBuilder from "./Components/Charts/ChartBuilder";
 
const ChartWithFunction = withChartsFunction(Charts)
const builder = new ChartBuilder('bar');
const built = builder.horizontal().stacked().dataLabels().build();
console.log(built);

const App: React.FC = () => {
  return (
    <div className={"App"}>
      <h1>Factory</h1>
      <Chart
        options={built as any}
        series={barData.series}
        type="bar"
      />
    </div>
  );
};

export default App;
