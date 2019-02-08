import React from 'react';
import Combo from './general/combo';
import { CellSm, CellLg, Row, H4 } from '../styles/styles';
import TableRowInput from './TableRowInput';
import RaingaugeInput from './RaingaugeInput';

const TableRow = ({ index, date, raingauges, sunshine, wind, pwl, comments, handleChange, handleChangeRaingauge }) => {
    console.log('raingauges:', raingauges);
    const mappedRainGaugeData = raingauges.map((rainGauge, i) => {
      const raingauge_id = rainGauge.raingauge_id;
      const rainfall = rainGauge.rainfall;
      console.log(`raingauge_id: ${raingauge_id}, rainfall: ${rainfall}`);

      return (
        <CellSm key={`mykey ${i}`}>
          <RaingaugeInput value={rainGauge.rainfall} inputKey={index} raingauge={raingauge_id} dataType='rainfall' handleChangeRaingauge={handleChangeRaingauge} />
        </CellSm>

      );
    });


  return (
    <Row>

      <CellSm>
        <H4>{date}</H4>
      </CellSm>

      {mappedRainGaugeData}

      <CellSm>
        <Combo value={wind} />
      </CellSm>

      <CellSm>
        <Combo value={sunshine} />
      </CellSm>

      <CellSm>
        <H4>{pwl}</H4>
      </CellSm>

      <CellLg>
        <TableRowInput value={comments} inputKey={index} dataType='comments' handleChangeRaingauge={handleChangeRaingauge} />
      </CellLg>

    </Row>
  );
};

export default TableRow;

// <Div4>
//   <BarBackground>
//     <YellowBar value={sunshine} />
//
//   </BarBackground>
// </Div4>

// <Div4>
//   <BarBackground>
//     <BlueBar value={wind} />
//   </BarBackground>
// </Div4>
