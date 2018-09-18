import { connect } from 'react-redux';
import FieldDetails from '../components/fieldDetails';
import { showModal, hideModal } from '../actions/modal';
import { MODAL_TYPE_CHART, MODAL_TYPE_OTHER } from '../components/modals/modalTypes';

const mapStateToProps = ({ modal }) => {
    console.log('modal: ', modal);

    return {

      modal

    };
};

const mapDispatchToProps = (dispatch) => {

    return {

      showChartModal: () => {
        dispatch(showModal(MODAL_TYPE_CHART, {
          title: 'This is a chart modal.'
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
