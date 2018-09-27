import React from 'react';
import { Chart, Axis, Cursor, Tooltip, Series, Line } from 'react-charts';
import '../../node_modules/react-vis/dist/style.css';
import colours from '../styles/colours';
import { CenteredDiv } from '../styles/styles';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries, LineSeries, DiscreteColorLegend } from 'react-vis';

const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];

const data2 = [
      { x: 0, y: 5 },
      { x: 1, y: 2 },
      { x: 2, y: 7 },
      { x: 3, y: 2 },
      { x: 4, y: 1 },
      { x: 5, y: 6 },
      { x: 6, y: 4 },
      { x: 7, y: 3 },
      { x: 8, y: 1 },
      { x: 9, y: 0 }
    ];

    const legendItems = [
      { title: 'Rainfall (mm)', color: colours.blue },
      { title: 'SMD', color: colours.green }
    ];

const LineChart = () => (
  <div>
    <XYPlot

      width={100%}
      height={300}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <VerticalBarSeries data={data2} color={colours.blue} />
      <LineSeries
        color={colours.green}
        data={data} />

      <XAxis />
      <YAxis />
    </XYPlot>
    <CenteredDiv>
      <DiscreteColorLegend orientation="horizontal" width={300} items={legendItems} />
    </CenteredDiv>
  </div>

  // <Chart
  //   data={[
  //     {
  //       label: 'SMD',
  //       data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
  //     },
  //     {
  //       label: 'Rainfall',
  //       data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
  //     }
  //   ]}
  // >
  //   <Axis primary type="time" position="bottom" />
  //   <Axis type="linear" position="left" />
  //   <Series type={Line} />
  //   <Cursor primary />
  //   <Cursor />
  //   <Tooltip />
  // </Chart>
);

export default LineChart;
