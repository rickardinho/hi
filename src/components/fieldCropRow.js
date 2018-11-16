import React from 'react';
import { CellSm, Row, H4 } from '../styles/styles';


const FieldCropRow = ({ fieldData }) => {

  const fieldCropHeaders = fieldData.map((field) => {
    return (

      <CellSm>
        <H4>{field.crop}</H4>
      </CellSm>

    );
  });


  return (
    <Row>

      <CellSm>
        <H4>Crop:</H4>
      </CellSm>

      {fieldCropHeaders}

    </Row>
  );
};

export default FieldCropRow;

// <Row>
//
//     <CellSm>
//       <H4>{date}</H4>
//     </CellSm>
//
//     {mappedRainGaugeData}
//
//     <CellSm>
//       <Combo value={wind} />
//     </CellSm>
//
//     <CellSm>
//       <Combo value={sunshine} />
//     </CellSm>
//
//     <CellSm>
//       <H4>{pwl}</H4>
//     </CellSm>
//
//     <CellLg>
//       <H4>{comments}</H4>
//     </CellLg>
//
// </Row>

// <Row>
//   <Block>
//     <Row>
//       <H4>Rainfall(mm)</H4>
//     </Row>
//     <Row>
//       {rainGaugeHeaders}
//     </Row>
//   </Block>
// </Row>
