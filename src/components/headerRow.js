import React from 'react';
import { Div1, Div3, DivRainfall, Row, H4 } from '../styles/styles';


const HeaderRow = ({ key }) => {

  return (
    <Row key={`mykey ${key}`}>

      <Div1>

      </Div1>

      <DivRainfall>
        <H4>Rainfall (mm)</H4>
      </DivRainfall>


      <Div3>
        <H4>Sunshine</H4>
      </Div3>


    </Row>
  );
};

export default HeaderRow;
