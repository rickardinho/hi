import React from 'react';
import { CellSm, CellLg, Row, H4 } from '../styles/styles';


const HeaderRow = () => {


  return (
    <Row>

      <CellSm>
        <H4>Date</H4>
      </CellSm>

      <CellSm>
        <H4>Crop & Weed cover (%)</H4>
      </CellSm>

      <CellSm>
        <H4>Adjusted rainfall (mm)</H4>
      </CellSm>

      <CellSm>
        <H4>Irrigation (mm)</H4>
      </CellSm>

      <CellSm>
        <H4>Soil moisture deficit (mm)</H4>
      </CellSm>

      <CellSm>
        <H4>Drainage (mm)</H4>
      </CellSm>

      <CellLg>
        <H4>Comments</H4>
      </CellLg>

    </Row>
  );
};

export default HeaderRow;

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
