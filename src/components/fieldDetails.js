import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import TableRow from './tableRow';
import { MainWrapper } from './../styles/styles';
import { Div1, Div2, Div3, Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


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

const HeaderRow  = ({ }) => {

  return (
      <Row>

        <Div1>
          <H4>Date</H4>
        </Div1>

        <Div1>
          <H4>Crop & Weed cover (%)</H4>
        </Div1>

        <Div1>
          <H4>Adjusted rainfall (mm)</H4>
        </Div1>

        <Div1>
          <H4>Irrigation (mm)</H4>
        </Div1>

        <Div1>
          <H4>Soil moisture deficit (mm)</H4>
        </Div1>

        <Div1>
          <H4>Drainage (mm)</H4>
        </Div1>

        <Div3>
          <H4>Comments</H4>
        </Div3>

      </Row>
  );
};


const FieldDetails  = () => {

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
        <H2>Field Details</H2>
      </Div1>

      <HeaderRow />

      {
          mappedTable
      }


    </MainWrapper>
  );
};

export default FieldDetails;
