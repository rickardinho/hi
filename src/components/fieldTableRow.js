import React from 'react';
import TableRowInput from './TableRowInput';
import { CellLg, CellSm, Row, H4 } from '../styles/styles';


const FieldTableRow = ({ index, date, cropCover, adjRainfall, irrigation, smd, drainage, comments, handleChange, fieldKey }) => {
  
  return (
    <Row>

      <CellSm>
        <H4>{date}</H4>
      </CellSm>

      <CellSm>
        <TableRowInput value={cropCover} inputKey={index} dataType='cropCover' handleChange={handleChange} fieldKey={fieldKey} />
      </CellSm>

      <CellSm>
        <TableRowInput value={adjRainfall} inputKey={index} dataType='adjRainfall' handleChange={handleChange} fieldKey={fieldKey} />
      </CellSm>

      <CellSm>
        <TableRowInput value={irrigation} inputKey={index} dataType='irrigation' handleChange={handleChange} fieldKey={fieldKey} />
      </CellSm>

      <CellSm>
        <H4>{smd}</H4>
      </CellSm>

      <CellSm>
        <TableRowInput value={drainage} inputKey={index} dataType='drainage' handleChange={handleChange} fieldKey={fieldKey} />
      </CellSm>

      <CellLg>
        <TableRowInput value={comments} inputKey={index} dataType='comments' handleChange={handleChange} fieldKey={fieldKey} />
      </CellLg>

    </Row>
  );
};

export default FieldTableRow;
