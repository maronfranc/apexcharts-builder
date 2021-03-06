import { dummyData } from "./dummyData";

export let barData: any = {
  series: dummyData.singleSerie,
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: dummyData.xaxis,
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
