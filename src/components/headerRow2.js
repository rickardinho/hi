import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import { Div1, Div2, Div3, Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const HeaderRow2  = ({ rainGaugeNames, key, index, date, rainfall, sunshine }) => {

  let rainGaugeHeaders = rainGaugeNames.map((rainGaugeName) => {
      return (
        <Div1>
          <H4>{rainGaugeName}</H4>
        </Div1>
      );
  });


  return (
      <Row>

        <Div1>
          <H4>Date</H4>
        </Div1>

        {rainGaugeHeaders}



        <Div3>
          <H4>Sun</H4>
        </Div3>

        <Div3>
          <H4>Wind</H4>
        </Div3>

        <Div1>
          <H4>Potential water loss (mm)</H4>
        </Div1>

        <Div3>
          <H4>Comments</H4>
        </Div3>

      </Row>
  );
};

export default HeaderRow2;
