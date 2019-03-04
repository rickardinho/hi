import { connect } from 'react-redux';
import FarmInfo from '../components/farmInfo';

import { setValue, setRaingaugeValue } from '../actions/farms';


const mapStateToProps = ({ farms }) => {
  console.log('this.state:', this.state);
  console.log('farms state:', farms);
  return {

    farm_data: farms.farm_data,
    farms_is_fetching: farms.farms_is_fetching,
    farm_raingauges: farms.farm_raingauges
  };

};

const mapDispatchToProps = (dispatch) => {

    return {

      setSelectedValue: (value, inputKey, dataType, farmKey) => {
        console.log('value: ', value);
        console.log('inputKey: ', inputKey);
        console.log('dataType: ', dataType);
        console.log('farmKey: ', farmKey);

        dispatch(setValue(value, inputKey, dataType, farmKey));

      },
      handleChange: (text, inputKey, dataType) => {
        console.log('text: ', text);
        console.log('inputKey: ', inputKey);
        console.log('dataType: ', dataType);

        dispatch(setValue(text, inputKey, dataType));

      },
      handleChangeRaingauge: (text, inputKey, dataType, raingauge) => {
        console.log('text: ', text);
        console.log('inputKey: ', inputKey);
        console.log('dataType: ', dataType);
        console.log('raingauge: ', raingauge);

        dispatch(setRaingaugeValue(text, inputKey, dataType, raingauge));

      }

    };
};

const FarmInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FarmInfo);

export default FarmInfoContainer;
