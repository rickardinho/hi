import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import { Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const HeaderRow  = ({ key, index, date, rainfall, sunshine }) => {

  return (
      <Row>
          <H4>Date</H4>
          <H4>Rainfall (mm)</H4>
          <H4>Sunshine</H4>
      </Row>
  );
};

export default HeaderRow;
