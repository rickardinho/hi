import { connect } from 'react-redux';
import FarmSummary from '../components/farmSummary';

// import { setValue, setRaingaugeValue } from '../actions/farms';

const mapStateToProps = ({ fields }) => {
  console.log('this.state:', this.state);

  console.log('this.state.fieldDataState:', fields);
  return {
    fields
  };

};


const mapDispatchToProps = (dispatch) => {

    return {

      // setSelectedValue: (value, inputKey, dataType, farmKey) => {
      //   console.log('value: ', value);
      //   console.log('inputKey: ', inputKey);
      //   console.log('dataType: ', dataType);
      //   console.log('farmKey: ', farmKey);
      //
      //   dispatch(setValue(value, inputKey, dataType, farmKey));
      //
      // },
      // handleChange: (text, inputKey, dataType) => {
      //   console.log('text: ', text);
      //   console.log('inputKey: ', inputKey);
      //   console.log('dataType: ', dataType);
      //
      //   dispatch(setValue(text, inputKey, dataType));
      //
      // },
      // handleChangeRaingauge: (text, inputKey, dataType, raingauge) => {
      //   console.log('text: ', text);
      //   console.log('inputKey: ', inputKey);
      //   console.log('dataType: ', dataType);
      //   console.log('raingauge: ', raingauge);
      //
      //   dispatch(setRaingaugeValue(text, inputKey, dataType, raingauge));
      //
      // }

    };
};

const FarmSummaryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FarmSummary);

export default FarmSummaryContainer;
