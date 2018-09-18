import React from 'react';
import { connect } from 'react-redux';

import Chart from './modals/chart';
import Other from './modals/other';

import { MODAL_TYPE_CHART, MODAL_TYPE_OTHER } from '../components/modals/modalTypes';

const MODAL_COMPONENTS = {
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
