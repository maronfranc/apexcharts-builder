import { ChartData, DataLabels } from "../../interfaces/Charts/Charts";

export default class ChartBuilder {
  private isHorizontal: boolean = false;
  private isStacked: boolean = false;
  private dataLabels!: DataLabels;
  constructor(private data: ChartData) {}

  public horizontalBar() {
    if (this.data.chartType === "bar") this.isHorizontal = true;
    return this;
  }

  public stacked() {
    this.isStacked = true;
    return this;
  }

  public showDataLabels() {
    this.dataLabels = {
      enabled: true,
      offsetY: 0,
      style: {
        fontSize: "16px",
        colors: ["#FFF"]
      }
    };
    return this;
  }

  public build() {
    switch (this.data.chartType) {
      case "pie":
        return {
          chartType: this.data.chartType,
          series: this.data.series,
          options: {
            labels: this.data.options.labels
          }
        };
      default:
        return {
          chartType: this.data.chartType as any,
          series: this.data.series,
          options: {
            chart: {
              id: "basic-bar",
              stacked: this.isStacked
            },
            xaxis: this.data.options.xaxis,
            plotOptions: {
              bar: {
                horizontal: this.isHorizontal
              }
            },
            dataLabels: this.dataLabels
          }
        };
    }
  }
}

/*
{
  series: dummyData.singleSerie,
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: dummyData.xAxis,
    plotOptions: {
      bar: {
        columnWidth: "50%",
        distributed: true,
        horizontal: false,
        barHeight: "70%",
        colors: {
          ranges: [
            {
              from: 0,
              to: 10,
              color: undefined
            }
          ],
          backgroundBarColors: [],
          backgroundBarOpacity: 1
        }
      }
    },
    dataLabels: {
      position: "top", // top, center, bottom
      enabled: true,
      offsetY: 0,
      style: {
        fontSize: "12px",
        colors: ["#000"]
      }
    }
  }
};

*/

/*
export let pieChartData = {
  series: dummyData.singleSerie[0].data,
  options: {
    chart: {
      events: {
        dataPointSelection: (event: Event, chartContext: any, config: any) => {
          console.log(config.dataPointIndex) // Pega index do trecho
          console.log(config.w.config.labels[config.dataPointIndex])
          console.log(config.w.config.series[config.dataPointIndex]);
        }
      }
    },
    labels: dummyData.labels,
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

*/
