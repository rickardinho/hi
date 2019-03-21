import React from 'react';
import { CellSm, Column, H4 } from '../styles/styles';


const SummaryDateColumn = ({ key, index, fieldName, fieldData }) => {

  const mappedDateCells = fieldData.map((cell, i) => {
    console.log('date cell', cell);
    return (

      <CellSm key={`Date_column, cell: ${cell.date}`}>
        <H4>{cell.date}</H4>
      </CellSm>

    );
  });

  return (
    <Column>
      <CellSm>
        <H4>Field Name</H4>
      </CellSm>
      <CellSm>
        <H4>Crop</H4>
      </CellSm>


      {mappedDateCells}

    </Column>
  );

};

export default SummaryDateColumn;

// <Div4>
//   <BarBackground>
//     <YellowBar value={sunshine} />
//
//   </BarBackground>
// </Div4>

// <Div4>
//   <BarBackground>
//     <BlueBar value={wind} />
//   </BarBackground>
// </Div4>
