import React, { Suspense } from 'react';

import Loading from '../../Loading/Loading';
import { dummyData } from '../../../dummy/data';
import { PieChart } from './declarations';

const Chart = React.lazy(() => import('react-apexcharts'));

export default function Pie({options, series}: PieChart) {

  return (
    <Suspense fallback={<Loading />}>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="380"
      />
    </Suspense>
  );
}

