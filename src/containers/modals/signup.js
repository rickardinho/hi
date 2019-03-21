import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal';
import Modal from '../../components/modals/modal';
import SignupContainer from '../auth/signup';

const SignupModal = ({ title, afterClose, hideModal }) => {
  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };

  return (
    <Modal title={title} onClose={onClose}>
      <SignupContainer />
    </Modal>
  );
};

SignupModal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default connect(null, { hideModal })(SignupModal);
