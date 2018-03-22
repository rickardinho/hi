import React from 'react';
import { render } from 'react-dom';
import colours from './../styles/colours';
import Combo from './general/combo';
import { BlueBar, YellowBar, BarBackground, Row, P, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const TableRow  = ({ key, index, date, rainfall, sunshine }) => {

  return (
      <Row>

          <H4>{date}</H4>

          <Combo value={rainfall} />
          <BarBackground>
            <BlueBar value={rainfall} />
          </BarBackground>

          <Combo value={sunshine} />
          <BarBackground>
            <YellowBar value={sunshine} />
          </BarBackground>
      </Row>
  );
};

export default TableRow;
