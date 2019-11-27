export interface ChartData {
  key?: string;
  name?: string;
  options: Options;
  series: ChartSerie[];
  chartType?:
    | "area"
    | "line"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "radar"
    | "stacked"
}

export interface Options {
  xaxis: any,
  chart: {
    width?: string | number;
    height?: string | number;
    type?: string;
    foreColor?: string;
    stacked?: boolean,
    events?: {
      dataPointSelection?: (event: Event, chartContext: any, config: any) => void
    }
  },
  fill: {
    colors: string[],
  }
  plotOptions?: {
    bar?: {
      horizontal?: boolean,
    }
    radialBar?: {
      offsetY?: number;
      startAngle?: number;
      endAngle?: number;
      hollow?: {
        margin: number;
        size: string;
        background: string;
        image: string | undefined,
      },
      track?: {
        show: boolean
      },
      dataLabels?: DataLabels
    };
    circle?: {
      track?: {
        show: boolean
      },
      dataLabels: {
        showOn?: string;
        name?: {
          show: boolean,
        },
        value?: {
          show: boolean,
        }
      }
    };
    pie?: {
      size?: undefined,
      donut?: {
        size?: string;
        background?: string;
      },
      customScale?: number;
      offsetX?: number;
      offsetY?: number;
      dataLabels?: {
        offset?: number;
      }
    }
  };
  dataLabels?: DataLabels,
  colors?: string[];
  labels?: string[];
  legend?: Legend;
}


export interface ChartSerie {
  name?: string;
  data?: number[];
}

interface DataLabels {
  enabled?: boolean,
  enabledOnSeries?: number[],
  formatter?: (val: string, opts: any) => {},
  textAnchor?: string,
  offsetX?: number | string,
  offsetY?: number | string,
  style?: {
    fontSize?: string,
    fontFamily?: string,
    colors?: undefined
  },
  dropShadow?: {
    enabled?: boolean,
    top?: number,
    left?: number,
    blur?: number,
    opacity?: number
  }
}

interface Legend {
  show?: boolean;
  floating?: boolean;
  fontSize?: string;
  position?: string;
  verticalAlign?: string;
  textAnchor?: string;
  labels?: {
    useSeriesColors?: boolean
  };
  markers?: {
    size: number
  };
  formatter?: Function;
  itemMargin?: {
    vertical: number;
  };
  containerMargin?: {
    left: number;
    top: number;
  }
};

type EndingShape = "flat" | "rounded";
type Orientation = "horizontal" | "vertical";
