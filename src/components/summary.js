import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import TableRow from './tableRow';
import HeaderRow from './headerRow';
import HeaderRow2 from './headerRow2';
import { MainWrapper } from './../styles/styles';

const data = [
  {
    date: '1 Jan',
    rainfall: 5,
    sunshine: 4,
    rainGaugeData: [ 1, 2, 3]
  },{
    date: '2 Jan',
    rainfall: 2,
    sunshine: 8,
    rainGaugeData: [ 1, 2, 3]
  },{
    date: '3 Jan',
    rainfall: 7,
    sunshine: 2,
    rainGaugeData: [ 1, 2, 3]
  },{
    date: '4 Jan',
    rainfall: 3,
    sunshine: 4,
    rainGaugeData: [ 1, 2, 3]
  },{
    date: '5 Jan',
    rainfall: 2,
    sunshine: 7,
    rainGaugeData: [ 1, 2, 3]
  },{
    date: '6 Jan',
    rainfall: 1,
    sunshine: 6,
    rainGaugeData: [ 1, 2, 3]
  },{
    date: '7 Jan',
    rainfall: 6,
    sunshine: 4,
    rainGaugeData: [ 1, 2, 3]
  }
]

const Summary  = () => {

  let mappedTable = data.map((data, i) => {
      return (
          <TableRow
              key={ i }
              index={ i }
              date={ data.date }
              rainfall={ data.rainfall }
              sunshine={ data.sunshine }
              rainGaugeData={ data.rainGaugeData }
          />
      );
  });

  return (
      <MainWrapper>
          <HeaderRow/>
          <HeaderRow2/>


          {
              mappedTable
          }


      </MainWrapper>
  );
};

export default Summary;
