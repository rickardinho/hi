import React from 'react';
import { Input } from '../styles/styles';


const RaingaugeInput = ({ value, inputKey, dataType, handleChangeRaingauge, raingauge }) => {


  return (

    <Input type='text' value={value} onChange={text => handleChangeRaingauge(text.target.value, inputKey, dataType, raingauge) } />

  );
};

export default RaingaugeInput;
