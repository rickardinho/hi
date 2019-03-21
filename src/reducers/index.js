import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import modal from './modal';
import sessionReducer from './session';
import user from './user';
import nav from './nav';
import network from './network';
import messageReducer from './message';
import fieldsReducer from './fields';
import farmsReducer from './farms';

const appReducer = combineReducers({

  modal,
  sessionState: sessionReducer,
  user,
  form,
  nav,
  network,
  messageState: messageReducer,
  fields: fieldsReducer,
  farms: farmsReducer

});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = { // eslint-disable-line no-param-reassign
      ...state,
      user: undefined,
      confirmUserEmail: undefined
    };
  }

  return appReducer(state, action);
};

export default rootReducer;
