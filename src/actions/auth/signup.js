// import Config from 'react-native-config';
import { persistor } from '../../init-store';
import { storeToken, storeUserId } from '../../lib/credentials';
import history from '../../components/Navigation/history';
// import initSocket from '../socket-router';
require('dotenv').config();

export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const LOGOUT = 'LOGOUT';

export const signupUserRequest = () => ({
  type: SIGNUP_USER_REQUEST
});

export const signupUserSuccess = data => ({
  type: SIGNUP_USER_SUCCESS,
  data
});

export const signupUserFailure = error => ({
  type: SIGNUP_USER_FAILURE,
  error
});

export const logout = () => ({
  type: LOGOUT
});

export function signupUser (firstname, surname, email, password) {
  console.log('singupUser:');
  console.log('firstname:', firstname);
  console.log('surname:', surname);
  console.log('email:', email);
  console.log('password:', password);
  console.log('REACT_APP_URI:', process.env.REACT_APP_URI);

  return (dispatch) => {
    dispatch(signupUserRequest());
    fetch(`${process.env.REACT_APP_URI}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstname, surname, email, password })
    })
    .then((response) => {
      console.log('signupUser response:', response);
      response.json()
        .then((data) => {
          if (data.token && data.user_id) {
            persistor.persist();
            dispatch(signupUserSuccess({
              firstname: data.firstname,
              surname: data.surname,
              email: data.email,
              photo_url: data.photo_url,
              user_id: data.user_id
            }));
            storeUserId(data.user_id);
            storeToken(data.token);
            // initSocket();
            history.push('uploadPhoto');

          } else {
            dispatch(signupUserFailure(data.error));
          }
        });
    })
    .catch((error) => {
      dispatch(signupUserFailure(error.message));
    });
  };
}
