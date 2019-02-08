import React from 'react';
import TableRow from './summaryTableRow';
import FieldNameRow from './fieldNameRow';
import FieldCropRow from './fieldCropRow';
import { PageTitleDiv, MainWrapper } from '../styles/styles';

const fieldData = [
  {
    field_id: 1,
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
];

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

const Summary = () => {

  const mappedTable = data.map((rowData, i) => {
    return (
      <TableRow
        key={ rowData.field_id }
        index={ i }
        date={ rowData.date }
        fieldData={ rowData.fieldData }
      />
    );
  });

  return (
    <MainWrapper>

      <PageTitleDiv />


      <MainWrapper>

        <FieldNameRow fieldData={ fieldData } />

        <FieldCropRow fieldData={ fieldData } />

        { mappedTable }
      </MainWrapper>

    </MainWrapper>
  );
};

export default Summary;
