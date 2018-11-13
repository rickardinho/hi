import React, { Component } from 'react';
// import { Chart, Axis, Cursor, Tooltip, Series, Line } from 'react-charts'; easy charts could be better??? scaling issues?
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries, LineSeries, DiscreteColorLegend } from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import colours from '../styles/colours';

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

class LineChart extends Component {

  constructor (props) {
    super(props);
    const initialWidth = window.innerWidth > 0 ? window.innerWidth : 500;
    this.state = { windowWidth: initialWidth - 100 };
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize () {
    this.setState({ windowWidth: window.innerWidth - (window.innerWidth * 0.22) });
  }

  render () {
    const { windowWidth } = this.state;
    console.log('windowWidth :', windowWidth);
    const componentWidth = windowWidth;

    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'stretch', borderColor: 'red', borderWidth: 2, borderStyle: 'solid' }}>
        <div style={{ display: 'flex', flex: 5, flexDirection: 'column', borderColor: 'blue', borderWidth: 2, borderStyle: 'solid' }}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', borderColor: 'yellow', borderWidth: 2, borderStyle: 'solid' }}>
            <FlexibleXYPlot
              width={componentWidth}
              style={{ borderColor: 'pink', borderWidth: 2, borderStyle: 'solid' }}
            >
              <HorizontalGridLines />
              <VerticalGridLines />
              <VerticalBarSeries data={data2} color={colours.blue} />
              <LineSeries
                color={colours.green}
                data={data} />

              <XAxis />
              <YAxis />
            </FlexibleXYPlot>
          </div>
        </div>
        <div style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderColor: 'orange', borderWidth: 2, borderStyle: 'solid' }}>
          <DiscreteColorLegend orientation="horizontal" items={legendItems} />
        </div>
      </div>

    );
  }
}


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


export default LineChart;
