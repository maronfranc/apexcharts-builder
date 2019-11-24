import React from "react";

import { ChartData, ApexOptions } from "../declarations";

function withChartsFunction<P extends object>(
  MainComponent: React.ComponentType<P>
): React.FC<P & ChartData> {
  return ({ options, series, onValueClickedFunction, ...props }: any) => {
    let chartOptions: ApexOptions = { ...options };
    chartOptions = {
      ...chartOptions,
      chart: {
        ...chartOptions.chart,
        events: {
          ...chartOptions.chart.events,
          dataPointSelection: (event: Event, chartContext: any, config: any) =>{
            console.log(config.seriesIndex)
            console.log(config.w)
            onValueClickedFunction()
          }
        }
      }
    };
    return (
      <MainComponent options={chartOptions} series={series} {...(props as P)} />
    );
  };
}
export default withChartsFunction;
