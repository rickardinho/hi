import React from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

const LineChart = () => (
  <Chart
    data={[
      {
        label: "SMD",
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: "Rainfall",
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ]}
  >
    <Axis primary type="time" />
    <Axis type="linear" />
    <Series type={Line} />
  </Chart>
);

export default LineChart;
