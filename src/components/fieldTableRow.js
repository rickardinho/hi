import React from 'react';
import { render } from 'react-dom';
import colours from './../styles/colours';
import Combo from './general/combo';
import { Input, Div1, Div2, Div3, Div4, BlueBar, YellowBar, BarBackground, Row, P, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const FieldTableRow  = ({ key, index, date, cropCover, adjRainfall, irrigation, smd, drainage, comments }) => {

  return (
      <Row>

          <Div1>
            <H4>{date}</H4>
          </Div1>

          <Div1>
            <Input value={cropCover} />
          </Div1>

          <Div1>
            <Input value={adjRainfall} />
          </Div1>

          <Div1>
            <Input value={irrigation} />
          </Div1>

          <Div1>
            <Input value={smd} />
          </Div1>

          <Div1>
            <Input value={drainage} />
          </Div1>

          <Div3>
            <H4>{comments}</H4>
          </Div3>

      </Row>
  );
};

export default FieldTableRow;
