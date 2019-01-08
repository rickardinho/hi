import { combineReducers } from 'redux';
import modal from './modal';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message';

export default combineReducers({

  modal,
  sessionState: sessionReducer,
  userState: userReducer,
  messageState: messageReducer,

});
