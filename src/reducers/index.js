import { combineReducers } from 'redux';
import modal from './modal';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message';
import fieldsReducer from './fields';
import farmsReducer from './farms';

export default combineReducers({

  modal,
  sessionState: sessionReducer,
  userState: userReducer,
  messageState: messageReducer,
  fields: fieldsReducer,
  farms: farmsReducer

});
