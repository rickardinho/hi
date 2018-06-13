import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import TableRow from './summaryTableRow';
import HeaderRow from './summaryHeaderRow';
import { PageTitleDiv, MainWrapper, Div1, Div2, Div3, Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';

const fieldData = [
  {
    name: 'Dusty field',
    crop: 'Potatoes, Desiree'
  },
  {
    name: 'Dusty field',
    crop: 'Potatoes, Desiree'
  },
  {
    name: 'Dusty field',
    crop: 'Potatoes, Desiree'
  },
  {
    name: 'Dusty field',
    crop: 'Potatoes, Desiree'
  },
  {
    name: 'Dusty field',
    crop: 'Potatoes, Desiree'
  },
  {
    name: 'Dusty field',
    crop: 'Potatoes, Desiree'
  },
  {
    name: 'Dusty field',
    crop: 'Potatoes, Desiree'
  },
  {
    name: 'Dusty field',
    crop: 'Potatoes, Desiree'
  }
]

const data = [
  {
    date: '1 Jan',
    fieldData: [
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
    ]
  },{
    date: '2 Jan',
    fieldData: [
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
    ]
  },{
    date: '3 Jan',
    fieldData: [
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
    ]
  },{
    date: '4 Jan',
    fieldData: [
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
    ]
  },{
    date: '5 Jan',
    fieldData: [
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
    ]
  },{
    date: '6 Jan',
    fieldData: [
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
    ]
  },{
    date: '7 Jan',
    fieldData: [
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
        { smd: 25 },
    ]
  }
]

const Summary  = () => {

  let mappedTable = data.map((data, i) => {
      return (
          <TableRow
              key={ i }
              index={ i }
              date={ data.date }
              fieldData={ data.fieldData }
          />
      );
  });

  return (
      <MainWrapper>

        <PageTitleDiv>
          <H3>Farm Summary</H3>
        </PageTitleDiv>
        <MainWrapper>

          <HeaderRow fieldData={ fieldData }/>

          { mappedTable }
        </MainWrapper>

      </MainWrapper>
  );
};

export default Summary;
