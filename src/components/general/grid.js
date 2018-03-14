import React from 'react';
import { render } from 'react-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import colours from './../../styles/colours';

const data = [
  {
    date: '1 Jan',
    rainfall: 90,
    sunshine: 23
  },{
    date: '2 Jan',
    rainfall: 26,
    sunshine: 23
  },{
    date: '3 Jan',
    rainfall: 40,
    sunshine: 23
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
                      width: `${row.value}%`,
                      height: '100%',
                      backgroundColor: row.value > 66 ? colours.darkblue
                        : row.value > 33 ? colours.blue
                        : colours.lightblue,
                      borderRadius: '2px',
                      transition: 'all .2s ease-out'
                    }}
                  />
                </div>
              )
        },
        {
          Header: 'Sunshine',
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
                      width: `${row.value}%`,
                      height: '100%',
                      backgroundColor: row.value > 66 ? colours.orange
                        : row.value > 33 ? colours.yellow
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
