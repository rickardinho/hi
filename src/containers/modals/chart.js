import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LineChart from '../../components/lineChart';
import { ChartWrapper, CloseButton } from './../../styles/styles';

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
      <ChartWrapper>
      <CloseButton onClick={onClose}>
        X
      </CloseButton>
      <div>
      <p>some element</p>
      </div>
      </ChartWrapper>
    </Modal>
  );
};

Chart.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default connect(null, { hideModal })(Chart);
