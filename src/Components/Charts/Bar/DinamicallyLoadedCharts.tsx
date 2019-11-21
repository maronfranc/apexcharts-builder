import React, { Suspense, useState } from 'react';
import Chart from 'react-apexcharts';

import Loading from '../../Loading/Loading';
import { dummyData } from '../../../dummy/data';

// const Chart = React.lazy(() => import('react-apexcharts'));
const Pie = React.lazy(() => import("../Pie/Pie"));

export default function DinamicallyLoadedBar() {
  const [toggleChart, setToggleChart] = useState<boolean>(false);
  const chartData = {
    series: dummyData.singleSerie,
    options: {
      chart: {
        id: "basic-bar",
        events: {
          dataPointSelection: (event: Event, chartContext: any, config: any) => {
            console.log(config.w.config)
          }
        }
      },
      theme: {
        // mode: 'dark',
        palette: "palette3"
      },
      xaxis: dummyData.xAxis,
      plotOptions: {
        bar: {
          columnWidth: '50%',
          distributed: true,
          horizontal: true,
          barHeight: '70%',
          colors: {
            ranges: [{
              from: 0,
              to: 10,
              color: undefined
            }],
            backgroundBarColors: [],
            backgroundBarOpacity: 1,
          },
        },
      },

      dataLabels: {
        position: 'top', // top, center, bottom
        enabled: true,
        offsetY: 0,
        style: {
          fontSize: '12px',
          colors: ["#000"]
        },
      },
    },

  };
  return (
    <>
      <button onClick={() => setToggleChart(!toggleChart)}>Toggle</button>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="500"
      />
      {toggleChart ? <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="500"
      /> : null}
    </>
  );
}

