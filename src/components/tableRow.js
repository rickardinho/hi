import React from 'react';
import { render } from 'react-dom';
import colours from './../styles/colours';
import Combo from './general/combo';
import { Input, Div1, Div2, Div3, Div4, BlueBar, YellowBar, BarBackground, Row, P, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';




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



          <Div1 min-width={70}>
            <H4>{date}</H4>
          </Div1>

         {mappedRainGaugeData}

          <Div3>

            <Combo value={wind} />


            <Div4>
              <BarBackground>
                <YellowBar value={sunshine} />

              </BarBackground>
            </Div4>
          </Div3>

          <Div3>

            <Combo value={sunshine} />

            <Div4>
              <BarBackground>
                <BlueBar value={wind} />
              </BarBackground>
            </Div4>
          </Div3>

          <Div1>
            <H4>{pwl}</H4>
          </Div1>

          <Div3>
            <H4>{comments}</H4>
          </Div3>

      </Row>
  );
};

export default TableRow;
