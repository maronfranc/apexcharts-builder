import React from "react";

import { ChartData } from "../declarations";

const withCharts = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & ChartData> => ({ options, series, ...props }: ChartData) => {
  return (
    <div>
      <h1>HOC</h1>
      <WrappedComponent options={options} series={series} {...(props as P)} />
    </div>
  );
};
export default withCharts;
