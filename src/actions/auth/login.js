import { persistor } from '../../init-store';
import { storeToken, storeUserId } from '../../lib/credentials';
import history from '../../components/Navigation/history';
import * as ROUTES from '../../constants/routes';
// import initSocket from '../socket-router';
require('dotenv').config();

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_RESET = 'LOGIN_USER_RESET';
export const LOGOUT = 'LOGOUT';


export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = data => ({
  type: LOGIN_USER_SUCCESS,
  data
});

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  error
});

export const loginUserReset = () => ({
  type: LOGIN_USER_RESET
});

export function loginUser (email, password) {

  return (dispatch) => {
    console.log('LOGIN WITHOUT RESET');
    dispatch(loginUserRequest());
    console.log(`${process.env.REACT_APP_URI}/login`);
    fetch(`${process.env.REACT_APP_URI}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then((response) => {
      if (response.status === 401) {
        dispatch(loginUserFailure('Wrong email or password!'));
      }
      console.log('loginUser response:', response);
      response.json()
        .then((data) => {
          console.log('data:', data);
          if (data.token && data.user_id) {
            persistor.persist();
            dispatch(loginUserSuccess({
              firstname: data.firstname,
              surname: data.surname,
              email: data.email,
              user_id: data.user_id,
              photo_url: data.photo_url
            }));
            storeUserId(data.user_id);
            storeToken(data.token);
            // initSocket();
            console.log('history: ', history);
            history.push(ROUTES.DASHBOARD);
          } else {
            dispatch(loginUserFailure(data.error));
          }
        })
        .catch(() => { dispatch(loginUserFailure('Wrong email or password!')); });
    })
    .catch(() => {
      dispatch(loginUserFailure('Wrong email or password!'));
    });
  };
}


export const logout = () => ({
  type: LOGOUT
});
