import React from "react";

import { ChartData, Options } from "../declarations";

export default withChartsFunction;
function withChartsFunction<P extends object>(
  MainComponent: React.ComponentType<P>
): React.FC<P & ChartData> {
  return ({ options, series, onChartClicked = optional, ...props }: any) => {
    let chartOptions: Options = { ...options };
    chartOptions = {
      ...chartOptions,
      chart: {
        ...chartOptions.chart,
        events: {
          ...chartOptions.chart.events,
          dataPointSelection: (event: Event, chartContext: any, config: any) =>{
            // console.log(config.seriesIndex)
            console.log(config.w)
            onChartClicked()
          }
        }
      }
    };
    return (
      <MainComponent options={chartOptions} series={series} {...(props as P)} />
    );
  };
}

function optional() {
  console.log("Sem função no gŕafico")
}