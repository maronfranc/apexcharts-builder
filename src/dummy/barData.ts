import { dummyData } from "./data";

export let barData = {
  series: dummyData.singleSerie,
  options: {
    chart: {
      id: "basic-bar",
      events: {
        dataPointSelection: (event: Event, chartContext: any, config: any) => {
          console.log(config.w.config);
        }
      }
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
