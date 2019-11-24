import { dummyData } from "./data";

export const stackedBarData = {
  series: dummyData.series,
  options: {
    xaxis: dummyData.xAxisDatetime,
      chart: {
        stacked: true,
        foreColor: '#111',
        events: {
          dataPointSelection: (event: Event, chartContext: any, config: any) => {
            console.log("Events: Dummy Data")
            console.log(config.w.config);
          }
        }
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
      // offsetY: 0,
      // style: {
      //   fontSize: '18px',
      //   colors: ["#FFF"]
      // },
    },
  }
};