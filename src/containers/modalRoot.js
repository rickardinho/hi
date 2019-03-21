import React from 'react';
import { connect } from 'react-redux';

import Chart from './modals/chart';
import Other from './modals/other';
import LoginModal from './modals/login';
import SignupModal from './modals/signup';
import ForgotPasswordModal from './modals/forgotpassword';

import { MODAL_TYPE_SIGNIN, MODAL_TYPE_SIGNUP, MODAL_TYPE_FORGOTPASSWORD, MODAL_TYPE_CHART, MODAL_TYPE_OTHER } from '../components/modals/modalTypes';

const MODAL_COMPONENTS = {
  [MODAL_TYPE_SIGNIN]: LoginModal,
  [MODAL_TYPE_SIGNUP]: SignupModal,
  [MODAL_TYPE_FORGOTPASSWORD]: ForgotPasswordModal,
  [MODAL_TYPE_CHART]: Chart,
  [MODAL_TYPE_OTHER]: Other
};

const ModalRoot = ({ type, props }) => {
  if (!type) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[type];
  return <ModalComponent {...props} />;
};

export default connect(state => state.modal)(ModalRoot);
