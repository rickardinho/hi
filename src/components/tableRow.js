import React from 'react';
import { render } from 'react-dom';
import colours from './../styles/colours';
import Combo from './general/combo';
import { Div1, Div2, BlueBar, YellowBar, BarBackground, Row, P, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const TableRow  = ({ key, index, date, rainfall, sunshine }) => {

  return (
      <Row>

          <Div1>
            <H4>{date}</H4>
          </Div1>

          <Div1>
            <Combo value={rainfall} />
          </Div1>

          <Div2>
            <BarBackground>
              <BlueBar value={rainfall} />
            </BarBackground>
          </Div2>

          <Div1>
            <Combo value={sunshine} />
          </Div1>

          <Div2>
            <BarBackground>
              <YellowBar value={sunshine} />
            </BarBackground>
          </Div2>

      </Row>
  );
};

export default TableRow;
