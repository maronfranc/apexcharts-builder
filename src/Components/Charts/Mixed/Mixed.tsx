import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import { dummyData } from '../../../dummy/data';
import Pie from '../Pie/Pie';
import { BarChart } from '../Bar/declarations';


export default function Mixed() {
  const [toggleChart, setToggleChart] = useState<boolean>(false);

  let chartData: BarChart = {
    series: dummyData.series,
    options: {
      xaxis: dummyData.xAxisDatetime,
      chart: {
        stacked: true,
        foreColor: '#111',
      },
      colors: ["#880000", "#008800"],
      fill: {
        colors: ["#990000", "#009900",],
      },
      plotOptions: {
        bar: {
          horizontal: false,
        }
      },
      dataLabels: {
        enabled: false,
      },
    },
  };
  return (
    <>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="500"
      />
      {toggleChart && <Pie />}

    </>
  );
}
