import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import { CellSm, CellLg, Block, Div1, Div2, Div3, Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const HeaderRow  = ({ rainGaugeNames, key, index, date, rainfall, sunshine }) => {

  let rainGaugeHeaders = rainGaugeNames.map((rainGaugeName) => {
      return (
        <CellSm>
          <H4>{rainGaugeName}</H4>
        </CellSm>
      );
  });


  return (
      <Row>

        <CellSm>
          <H4>Date</H4>
        </CellSm>


        {rainGaugeHeaders}


        <CellSm>
          <H4>Sun</H4>
        </CellSm>

        <CellSm>
          <H4>Wind</H4>
        </CellSm>

        <CellSm>
          <H4>Potential water loss (mm)</H4>
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
