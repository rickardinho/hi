import React from 'react';
import { CellSm, Row, H4 } from '../styles/styles';


const TableRow = ({ key, index, fieldData, date }) => {

  const mappedfieldData = fieldData.map((field, i) => {
    return (

      <CellSm key={`mykey ${field.key}`}>
        <H4>{field.smd}</H4>
      </CellSm>

    );
  });


  return (
    <Row>

      <CellSm>
        <H4>{date}</H4>
      </CellSm>

      {mappedfieldData}

    </Row>
  );
};

export default TableRow;

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
