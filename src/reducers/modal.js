/** Constants */
import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';

/** Initial State */
const initialState = {
  type: null,
  props: {}
};

/** Modal reducer */
function modalReducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        type: action.payload.type,
        props: action.payload.props
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default modalReducer;
