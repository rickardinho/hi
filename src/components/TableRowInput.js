import React from 'react';
import { Input } from '../styles/styles';


const TableRowInput = ({ value, inputKey, dataType, handleChange, fieldKey }) => {


  return (


    <Input type='text' value={value} onChange={text => handleChange(text.target.value, inputKey, dataType, fieldKey) } />

  );
};

export default TableRowInput;
