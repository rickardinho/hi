import React from 'react';
import { render } from 'react-dom';
import colours from './../styles/colours';
import Combo from './general/combo';
import { CellSm, CellLg, Block, Input, Div1, Div2, Div3, Div4, BlueBar, YellowBar, BarBackground, Row, P, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';




const TableRow  = ({ key, index, fieldData, date }) => {

    let mappedfieldData = fieldData.map((field, i) => {
      return (
          <CellSm>
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
