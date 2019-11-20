import React, { Suspense } from 'react';

import Loading from '../../Loading/Loading';
import { dummyData } from '../../../dummy/data';

const Chart = React.lazy(() => import('react-apexcharts'));


export default function Bar() {
  return (
    <Suspense fallback={<Loading />}>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="500"
      />
    </Suspense>
  );
}


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
    xaxis: dummyData.xAxis,
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: true,
        horizontal: false,
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
      // offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#000"]
      },
    },
  },

};