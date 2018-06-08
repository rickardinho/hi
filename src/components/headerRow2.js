import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import { Div1, Div2, Div3, Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const HeaderRow2  = ({ key, index, date, rainfall, sunshine }) => {

  return (
      <Row>

        <Div1>
          <H4>Date</H4>
        </Div1>

        <Div1>
          <H4>Raingauge 1</H4>
        </Div1>
        <Div1>
          <H4>Raingauge 2</H4>
        </Div1>
        <Div1>
          <H4>Raingauge 3</H4>
        </Div1>
        <Div1>
          <H4>(master) Raingauge 4</H4>
        </Div1>



        <Div1>
          <H4>Sun</H4>
        </Div1>

        <Div1>
          <H4>Wind</H4>
        </Div1>

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
