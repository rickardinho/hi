import React from 'react';
import { CellSm, Input } from '../styles/styles';


const TableRowInput = ({ value, inputKey, dataType, handleChange, fieldKey }) => {


  return (

    <CellSm>
      <Input type='text' value={value} onChange={text => handleChange(text.target.value, inputKey, dataType, fieldKey) } />
    </CellSm>


  );
};

export default TableRowInput;
