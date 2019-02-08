import React from 'react';
import { CellSm, Input } from '../styles/styles';


const RaingaugeInput = ({ value, inputKey, dataType, handleChangeRaingauge, raingauge }) => {


  return (

    <CellSm>
      <Input type='text' value={value} onChange={text => handleChangeRaingauge(text.target.value, inputKey, dataType, raingauge) } />
    </CellSm>


  );
};

export default RaingaugeInput;
