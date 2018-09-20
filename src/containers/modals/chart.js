import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LineChart from '../../components/lineChart';

import { hideModal } from '../../actions/modal';
import Modal from '../../components/modals/modal';

const Chart = ({ title, afterClose, hideModal }) => {
  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };

  return (
    <Modal title={title} onClose={onClose}>
      <button onClick={onClose}>
        X
      </button>
      <LineChart />
    </Modal>
  );
};

Chart.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default connect(null, { hideModal })(Chart);
