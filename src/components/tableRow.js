import React from 'react';
import { render } from 'react-dom';
import colours from './../styles/colours';
import Combo from './general/combo';
import { Block, Input, Div1, Div2, Div3, Div4, BlueBar, YellowBar, BarBackground, Row, P, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';




const TableRow  = ({ key, index, date, rainGaugeData, sunshine, wind, pwl, comments }) => {

    let mappedRainGaugeData = rainGaugeData.map((rainGauge, i) => {
      return (
          <Div1>
            <Input value={rainGauge} />
          </Div1>



      );
    });


  return (
      <Row>

          <Div1 minWidth='30' maxWidth='100'>
            <H4>{date}</H4>
          </Div1>

          {mappedRainGaugeData}

          <Div1 minWidth='30' maxWidth='100'>
            <Combo value={wind} />
          </Div1>

          <Div1 minWidth='30' maxWidth='100'>
            <Combo value={sunshine} />
          </Div1>

          <Div1 minWidth='30' maxWidth='100'>
            <H4>{pwl}</H4>
          </Div1>

          <Div3>
            <H4>{comments}</H4>
          </Div3>

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
