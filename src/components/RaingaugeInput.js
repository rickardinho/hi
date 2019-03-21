import React from 'react';
import { Input } from '../styles/styles';


const RaingaugeInput = ({ value, inputKey, farmKey, dataType, handleChangeRaingauge, raingauge }) => {

  console.log('inputKey', inputKey);
  console.log('dataType', dataType);
  console.log('farmKey', farmKey);
  console.log('raingauge', raingauge);

  return (

    <Input
      type='text'
      value={value}
      onChange={text => handleChangeRaingauge(text.target.value, inputKey, farmKey, dataType, raingauge, false) }
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          // want to focus on next inputKey
          console.log('Enter key pressed');
          handleChangeRaingauge(value, inputKey, farmKey, dataType, raingauge, true);
          e.target.blur();
        }
      }}
       />

  );
};

export default RaingaugeInput;
