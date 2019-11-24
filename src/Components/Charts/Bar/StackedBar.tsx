import React from 'react';
import Chart from 'react-apexcharts';

export default StackedBar;
function StackedBar({options, series}: any) {
  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width="500"
    />
  );
}
