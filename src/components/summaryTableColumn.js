import React from 'react';
import { CellSm, Row, Column, H4 } from '../styles/styles';
import colours from '../styles/colours';

const SummaryTableColumn = ({ index, fieldName, fieldId, fieldData }) => {
  console.log(`fieldName: ${fieldName}`);
  const mappedfieldDataCells = fieldData.map((cell, i) => {
    console.log(`field_id: ${fieldId}, cell, cell`);

    const backgroundColor = () => {
      if (cell.smd < 11) {
        return colours.red;
      }
      if (cell.smd < 21) {
        return colours.orange;
      }
      if (cell.smd < 31) {
        return null;
      }
    };

    return (

      <CellSm background={backgroundColor} key={`field_id: ${fieldId}, cell_id: ${cell.date}`}>
        <H4>{cell.smd}</H4>
      </CellSm>

    );
  });


  return (
    <Column key={`column_id: ${fieldId}`}>

      {mappedfieldDataCells}

    </Column>
  );
};

export default SummaryTableColumn;

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
