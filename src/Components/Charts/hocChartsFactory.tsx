import React from "react";

import Loading from "../Loading/Loading";
import { ApexOptions, ChartSerie } from "./declarations";

interface WithChartsProps {
  options: ApexOptions;
  series: ChartSerie[];
}

const withCharts = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithChartsProps> => ({
  options,
  series,
  ...props
}: WithChartsProps) => {
  return (
    <div>
      <h1>HOC</h1>
      <WrappedComponent options={options} series={series} {...(props as P)} />
    </div>
  );
};
export default withCharts;
