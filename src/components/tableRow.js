import React from 'react';
import { render } from 'react-dom';
import colours from './../styles/colours';
import Combo from './general/combo';
import { Div1, Div2, Div3, Div4, BlueBar, YellowBar, BarBackground, Row, P, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const TableRow  = ({ key, index, date, raing1, rainfall, sunshine }) => {

  return (
      <Row>
          
          <Div1>
             <Combo value={raing1} />
          </Div1>
          
          <Div1>
            <H4>{date}</H4>
          </Div1>

          <Div3>

            <Combo value={rainfall} />


            <Div4>
              <BarBackground>
                <BlueBar value={rainfall} />
              </BarBackground>
            </Div4>
          </Div3>

          <Div3>

            <Combo value={sunshine} />

            <Div4>
              <BarBackground>
                <YellowBar value={sunshine} />
              </BarBackground>
            </Div4>
          </Div3>

      </Row>
  );
};

export default TableRow;
