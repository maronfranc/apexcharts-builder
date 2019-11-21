import React, { Suspense } from 'react';

import Loading from '../../Loading/Loading';
import { dummyData } from '../../../dummy/data';

const Chart = React.lazy(() => import('react-apexcharts'));

export default function Pie() {

  return (
    <Suspense fallback={<Loading />}>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="380"
      />
    </Suspense>
  );
}

const chartData = {
  series: dummyData.singleSerie[0].data,
  options: {
    chart: {
      events: {
        dataPointSelection: (event: Event, chartContext: any, config: any) => {
          console.log(config.w.config.labels[config.dataPointIndex])
        }
      }
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend: {
      position: 'left',
      horizontalAlign: 'right',
      offsetY: 0,
      height: 230,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }],
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val.toFixed(2) + "%"
      },
      dropShadow: {
        enabled: false,
        enabledSeries: undefined,
        top: 2,
        left: 2,
        blur: 4,
        opacity: 0.35
      },
    },
    plotOptions: {
      pie: {
        size: undefined,
        customScale: 1,
        offsetX: 0,
        offsetY: 0,
        expandOnClick: true,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10
        },
        donut: {
          size: '65%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              color: undefined,
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              color: undefined,
              offsetY: 16,
              formatter: function (val: string) {
                return val
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              color: '#373d3f',
              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b
                }, 0)
              },
            }
          },
        },
      },
    },
  },

}

