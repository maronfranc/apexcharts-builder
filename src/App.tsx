import React, { useState } from "react";
import "./App.css";
import { barData } from "./dummy/barData";
import Charts from "./Components/Charts/Charts";
 

const App: React.FC = () => {
  return (
    <div className={"App"}>
      <h1>Factory</h1>
      <Charts
        key="id"
        name="name"
        options={barData.options as any}
        series={barData.series}
        chartType="bar"
      />
    </div>
  );
};

export default App;
