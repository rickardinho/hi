import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import TableRow from './tableRow';
// import HeaderRow from './headerRow
import HeaderRow2 from './headerRow2';
import { MainWrapper, Div1, Div2, Div3, Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';

const rainGaugeNames = [ 'Raingauge East', 'Raingauge North', 'Raingauge West', 'Raingauge South' ]

const data = [
  {
    date: '1 Jan',
    wind: 5,
    sunshine: 4,
    pwl: 3.2,
    rainGaugeData: [ 1, 2, 3, 4],
    comments: 'blah blah blah'
  },{
    date: '2 Jan',
    wind: 2,
    sunshine: 8,
    pwl: 3.2,
    rainGaugeData: [ 1, 2, 3, 4],
    comments: 'blah blah blah'
  },{
    date: '3 Jan',
    wind: 7,
    sunshine: 2,
    pwl: 3.2,
    rainGaugeData: [ 1, 2, 3, 4],
    comments: 'blah blah blah'
  },{
    date: '4 Jan',
    wind: 3,
    sunshine: 4,
    pwl: 3.2,
    rainGaugeData: [ 1, 2, 3, 4],
    comments: 'blah blah blah'
  },{
    date: '5 Jan',
    wind: 2,
    sunshine: 7,
    pwl: 3.2,
    rainGaugeData: [ 1, 2, 3, 4],
    comments: 'blah blah blah'
  },{
    date: '6 Jan',
    wind: 1,
    sunshine: 6,
    pwl: 3.2,
    rainGaugeData: [ 1, 2, 3, 4],
    comments: 'blah blah blah'
  },{
    date: '7 Jan',
    wind: 6,
    sunshine: 4,
    pwl: 3.2,
    rainGaugeData: [ 1, 2, 3, 4],
    comments: 'blah blah blah'
  }
]

const Summary  = () => {

  let mappedTable = data.map((data, i) => {
      return (
          <TableRow
              key={ i }
              index={ i }
              date={ data.date }
              sunshine={ data.sunshine }
              wind={ data.wind }
              pwl={ data.pwl }
              rainGaugeData={ data.rainGaugeData }
              comments={ data.comments }
          />
      );
  });

  return (
      <MainWrapper>
        <Div1>
          <H2>Farm Summary</H2>
        </Div1>

        <HeaderRow2 rainGaugeNames={ rainGaugeNames }/>


        {
            mappedTable
        }


      </MainWrapper>
  );
};

export default Summary;
