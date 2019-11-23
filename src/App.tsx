import React, { Suspense, lazy } from "react";

import "./App.css";
import Loading from "./Components/Loading/Loading";
import Mixed from "./Components/Charts/Mixed/Mixed";
import withCharts from "./Components/Charts/hocChartsFactory";
import { pieChartData } from "./dummy/pieData";

const Bar = lazy(() => import("./Components/Charts/Bar/Bar"));
const Pie = lazy(() => import("./Components/Charts/Pie/Pie"));
const StackedBar = lazy(() => import("./Components/Charts/Bar/StackedBar"));

const MixedChartWithHoc = withCharts<any>(Mixed);
const PieChartWihtHoc = withCharts<any>(Pie);

const App: React.FC = () => {
  return (
    <div className={"App"}>
      <MixedChartWithHoc />
      <hr />
      <Suspense fallback={<Loading />}>
        <h1>Pie</h1>
        <PieChartWihtHoc
          options={pieChartData.options}
          series={pieChartData.series}
        />
      </Suspense>
      <hr />
    </div>
  );
};

export default App;
