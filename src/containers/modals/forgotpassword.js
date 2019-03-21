import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal';
import Modal from '../../components/modals/modal';
import ConfirmEmailContainer from '../auth/confirm-email';

const ForgotPasswordModal = ({ title, afterClose, hideModal }) => {
  const onClose = () => {
    hideModal();

    if (afterClose) {
      afterClose();
    }
  };

  return (
    <Modal title={title} onClose={onClose}>
      <ConfirmEmailContainer />
    </Modal>
  );
};

ForgotPasswordModal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default connect(null, { hideModal })(ForgotPasswordModal);
