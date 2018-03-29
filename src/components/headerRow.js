import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import { Div1, Div2, Div3, Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const HeaderRow  = ({ key, index, date, rainfall, sunshine }) => {

  return (
      <Row>

        <Div1>
          <H4>Date</H4>
        </Div1>

        <Div3>
          <H4>Rainfall (mm)</H4>
        </Div3>



        <Div3>
          <H4>Sunshine</H4>
        </Div3>


      </Row>
  );
};

export default HeaderRow;
