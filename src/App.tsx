import React, { useState } from "react";
import "./App.css";
import { barData } from "./dummy/barData";
import StackedBar from "./Components/Charts/Bar/StackedBar";
import { stackedBarData } from "./dummy/stackedBarData";
import Bar from "./Components/Charts/Bar/Bar";
import withChartsFunction from "./Components/Charts/hoc/withChartFunction";

const BarChartWithFunction = withChartsFunction(StackedBar);

const App: React.FC = () => {
  const [toggleChart, setToggleChart] = useState<boolean>(false);
  const toggle = () => setToggleChart(toggleChart => !toggleChart);
  return (
    <div className={"App"}>
      <BarChartWithFunction
        onValueClickedFunction={toggle}
        options={stackedBarData.options}
        series={stackedBarData.series}
      />
      {toggleChart && <Bar options={barData.options as any} series={barData.series}/>}
      <hr />
    </div>
  );
};

export default App;
