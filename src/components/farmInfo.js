import React, { Component } from 'react';
import FarmTableRow from './farmInfoTableRow';
import HeaderRow from './farmInfoHeaderRow';
import { PageTitleDiv, MainWrapper } from '../styles/styles';
import UndoRedo from '../containers/undo-redo-container';

// needs linking

class FarmInfo extends Component {

  constructor (props) {
    super(props);
    console.log('FarmInfo constructor this props', this.props);
  }


  render () {

    const { farm_data, farms_is_fetching, farm_raingauges, setSelectedValue, handleChange, handleChangeRaingauge } = this.props;

    if (farm_data === undefined) {
      return (
        <MainWrapper>

          <PageTitleDiv />


          <MainWrapper>
            <p>No data</p>
          </MainWrapper>

        </MainWrapper>
      );

    }
    console.log('farm_data', farm_data);
    // need logic to select farm
    const selectedFarmDataValues = farm_data[0].farm_data_values;
    const farmId = farm_data[0].farm_id;
    console.log('farmId', farmId);
    console.log('selectedFarmDataValues', selectedFarmDataValues);
    const rainGaugeNames = farm_raingauges.map((raingauge) => {
      return (
        `Raingauge ${raingauge.raingauge_name}`
      );
    });

    const mappedTable = selectedFarmDataValues.map((dataRow, i) => {

        const pwl = dataRow.sun * dataRow.wind // replace with calc logic
        console.log('dataRow farm: ', dataRow);
        console.log('dataRow.raingauges farm: ', dataRow.raingauges);
        return (
          <FarmTableRow
            key={ i }
            index={ i }
            farmId={ farmId }
            date={ dataRow.date }
            sun={ dataRow.sun }
            wind={ dataRow.wind }
            pwl={ pwl } // to be calculated
            raingauges={ dataRow.raingauges }
            comments={ dataRow.comments }
            setSelectedValue={ setSelectedValue }
            handleChange={ handleChange }
            handleChangeRaingauge={ handleChangeRaingauge }
          />
        );
    });

    return (
      <MainWrapper>

        <PageTitleDiv />

        <UndoRedo />
        <MainWrapper>

          <HeaderRow rainGaugeNames={ rainGaugeNames } />

          { mappedTable }
        </MainWrapper>

      </MainWrapper>
    );
  }
}

export default FarmInfo;
