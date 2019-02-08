import React, { Component } from 'react';
import TableRow from './farmInfoTableRow';
import HeaderRow from './farmInfoHeaderRow';
import { PageTitleDiv, MainWrapper } from '../styles/styles';

const rainGaugeNames = ['Raingauge East', 'Raingauge North', 'Raingauge West', 'Raingauge South']
// needs linking

class FarmInfo extends Component {

  constructor (props) {
    super(props);
    console.log('FarmInfo constructor this props', this.props);
  }


  render () {

    const { farm_data, farms_is_fetching, handleChange, handleChangeRaingauge } = this.props;

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


    const mappedTable = selectedFarmDataValues.map((dataRow, i) => {

        const pwl = dataRow.sun * dataRow.wind // replace with calc logic
        console.log('dataRow farm: ', dataRow);
        console.log('dataRow.raingauges farm: ', dataRow.raingauges);
        return (
          <TableRow
            key={ i }
            index={ i }
            date={ dataRow.date }
            sunshine={ dataRow.sun }
            wind={ dataRow.wind }
            pwl={ pwl } // to be calculated
            raingauges={ dataRow.raingauges }
            comments={ dataRow.comments }
            handleChange={ handleChange }
            handleChangeRaingauge={ handleChangeRaingauge }
          />
        );
    });

    return (
      <MainWrapper>

        <PageTitleDiv />


        <MainWrapper>

          <HeaderRow rainGaugeNames={ rainGaugeNames } />

          { mappedTable }
        </MainWrapper>

      </MainWrapper>
    );
  }
}

export default FarmInfo;
