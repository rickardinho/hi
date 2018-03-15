import React from 'react';
import { render } from 'react-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import colours from './../../styles/colours';

const data = [
  {
    date: '1 Jan',
    rainfall: 5,
    sunshine: 4
  },{
    date: '2 Jan',
    rainfall: 2,
    sunshine: 8
  },{
    date: '3 Jan',
    rainfall: 7,
    sunshine: 2
  },
  ,{
    date: '4 Jan',
    rainfall: 3,
    sunshine: 4
  },
  ,{
    date: '5 Jan',
    rainfall: 2,
    sunshine: 7
  },
  ,{
    date: '6 Jan',
    rainfall: 1,
    sunshine: 6
  },
  ,{
    date: '7 Jan',
    rainfall: 6,
    sunshine: 4
  }
]

const columns = [
  {
    Header: 'Date',
    accessor: 'date' // String-based value accessors!
  }, {
    Header: 'Weather',
      columns: [
        {
          Header: 'Rainfall (mm)',
          accessor: 'rainfall'
        },
        {

          accessor: 'rainfall',
          Cell: row => (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#dadada',
                    borderRadius: '2px'
                  }}
                >
                  <div
                    style={{
                      width: `${row.value * 10}%`,
                      height: '100%',
                      backgroundColor: row.value * 10 > 66 ? colours.darkblue
                        : row.value * 10 > 33 ? colours.blue
                        : colours.lightblue,
                      borderRadius: '2px',
                      transition: 'all .2s ease-out'
                    }}
                  />
                </div>
              )
        },
        {
          Header: 'Sunshine (hrs)',
          accessor: 'sunshine'
        },
        {

          accessor: 'sunshine',
          Cell: row => (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#dadada',
                    borderRadius: '2px'
                  }}
                >
                  <div
                    style={{
                      width: `${row.value * 10}%`,
                      height: '100%',
                      backgroundColor: row.value * 10 > 66 ? colours.orange
                        : row.value * 10 > 33 ? colours.yellow
                        : colours.lightyellow,
                      borderRadius: '2px',
                      transition: 'all .2s ease-out'
                    }}
                  />
                </div>
              )
        }
      ]

  }
]

const Grid = () => (
  <div>
    <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
    />
  </div>

);

export default Grid;
