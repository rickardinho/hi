import React from 'react';
import ComboSun from './general/combo-sun';
import ComboWind from './general/combo-wind';
import { CellSm, CellLg, Row, H4 } from '../styles/styles';
import CommentInput from './CommentInput';
import RaingaugeInput from './RaingaugeInput';

const FarmTableRow = ({ index, farmId, date, raingauges, sun, wind, pwl, comments, setSelectedValue, handleChange, handleChangeRaingauge }) => {
    console.log('raingauges:', raingauges);
    const mappedRainGaugeData = raingauges.map((rainGauge, i) => {
      const raingauge_id = rainGauge.raingauge_id;
      const rainfall = rainGauge.rainfall;
      console.log(`raingauge_id: ${raingauge_id}, rainfall: ${rainfall}`);

      return (
        <CellSm key={`mykey raingauge_id: ${raingauge_id}, date: ${date}`}>
          <RaingaugeInput
            value={rainGauge.rainfall}
            inputKey={index}
            farmKey={farmId}
            raingauge={raingauge_id}
            dataType='rainfall'
            handleChangeRaingauge={handleChangeRaingauge}
          />
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
        <ComboSun
          value={sun}
          onSelect={setSelectedValue}
          dataType='sun'
          inputKey={index}
          farmKey={farmId}
        />
      </CellSm>

      <CellSm>
        <ComboWind
          value={wind}
          onSelect={setSelectedValue}
          dataType='wind'
          inputKey={index}
          farmKey={farmId}
        />
      </CellSm>

      <CellSm>
        <H4>{pwl}</H4>
      </CellSm>

      <CellLg>
        <CommentInput value={comments} inputKey={index} dataType='comments' handleChange={handleChange} farmKey={farmId} />
      </CellLg>

    </Row>
  );
};

export default FarmTableRow;

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
