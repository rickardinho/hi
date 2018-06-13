import React from 'react';
import { render } from 'react-dom';
import colours from './../styles/colours';
import Combo from './general/combo';
import { CellLg, CellSm, Input, Div1, Div2, Div3, Div4, BlueBar, YellowBar, BarBackground, Row, P, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


const FieldTableRow  = ({ key, index, date, cropCover, adjRainfall, irrigation, smd, drainage, comments }) => {

  return (
      <Row>

          <CellSm>
            <H4>{date}</H4>
          </CellSm>

          <CellSm>
            <Input value={cropCover} />
          </CellSm>

          <CellSm>
            <Input value={adjRainfall} />
          </CellSm>

          <CellSm>
            <Input value={irrigation} />
          </CellSm>

          <CellSm>
            <H4>{smd}</H4>
          </CellSm>

          <CellSm>
            <Input value={drainage} />
          </CellSm>

          <CellLg>
            <Input value={comments} />
          </CellLg>

      </Row>
  );
};

export default FieldTableRow;
