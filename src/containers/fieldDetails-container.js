import { connect } from 'react-redux';
import FieldDetails from '../components/fieldDetails';
import { showModal, hideModal } from '../actions/modal';
import { setValue } from '../actions/fieldData';
import { MODAL_TYPE_CHART, MODAL_TYPE_OTHER } from '../components/modals/modalTypes';

const mapStateToProps = ({ modal, fields }) => {
  console.log('this.state:', this.state);
  console.log('this.state.modal:', modal);
  console.log('this.state.fieldDataState:', fields);
  return {
    modal,
    fields
  };

};

const mapDispatchToProps = (dispatch) => {

    return {
      handleChange: (text, inputKey, dataType, fieldKey) => {
        console.log('text: ', text);
        console.log('inputKey: ', inputKey);
        console.log('dataType: ', dataType);
        console.log('fieldKey: ', fieldKey);

        dispatch(setValue(text, inputKey, dataType, fieldKey));

      },

      showChartModal: () => {
        dispatch(showModal(MODAL_TYPE_CHART, {
          title: 'Soil moisture deficit vs Rainfall'
        }));
      },
      showOtherModal: () => {
        dispatch(showModal(MODAL_TYPE_OTHER, {
          title: 'Do you confirm?',
          onConfirm: (isConfirmed) => {
            this.props.showModal(MODAL_TYPE_CHART, {
              title: `The user did confirm: ${isConfirmed}`
            });
          }
        }));
      },
      hideModal: () => {
        dispatch(hideModal());
      }

    };
};

const FieldDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FieldDetails);

export default FieldDetailsContainer;
