import React, { Suspense, lazy } from "react";

import "./App.css";
import Loading from "./Components/Loading/Loading";
import DinamicallyLoadedBar from "./Components/Charts/Mixed/DinamicallyLoadedCharts";
import Mixed from "./Components/Charts/Mixed/Mixed";
import withChartsFactory from "./Components/Charts/hocChartsFactory";
import withLoading from "./Components/Charts/hocChartsFactory";

const Bar = lazy(() => import("./Components/Charts/Bar/Bar"));
const Pie = lazy(() => import("./Components/Charts/Pie/Pie"));
const StackedBar = lazy(() => import("./Components/Charts/Bar/StackedBar"));

const MixedChartWithHoc = withLoading<any>(Mixed);
const PieChartWihtHoc = withLoading<any>(Pie);

const App: React.FC = () => {
  return (
    <div className={"App"}>
      <MixedChartWithHoc />
      <hr />
      <Suspense fallback={<Loading />}>
        <h1>Pie</h1>
        <PieChartWihtHoc />
      </Suspense>
      <hr />
    </div>
  );
};

export default App;
