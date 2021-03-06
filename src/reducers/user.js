import * as signup from '../actions/auth/signup';
import * as login from '../actions/auth/login';
import * as profile from '../actions/auth/profile';

export const initialState = {
  isSigningUp: false,
  isLoggingIn: false,
  isLoggedIn: false,
  error: undefined,
  firstname: '',
  surname: '',
  email: '',
  photo_url: '',
  user_id: '',
  user_update_no: undefined,
  user_open_no: undefined,
  isFetching: false,
  isFetchingUpload: false,
  errorUpdate: undefined,
  errorUpload: undefined,
  errorUpdateNo: undefined,
  errorOpenNo: undefined
};

export default function user (state = initialState, action) {
  switch (action.type) {

    case login.LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        error: undefined
      };
    case login.LOGIN_USER_RESET:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: undefined
      };
    case profile.EDIT_NAME_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case profile.GOT_IT_WHATS_NEW_REQUEST:
      return {
        ...state,
        user_update_no: action.data
      };
    case profile.UPDATE_OPEN_NO_REQUEST:
      return {
        ...state,
        user_open_no: action.data
      };
    case profile.UPLOAD_PHOTO_REQUEST:
      return {
        ...state,
        isFetchingUpload: true
      };
    case profile.CHANGE_NAME:
      return handleChangeName(state, action);

    case signup.SIGNUP_USER_REQUEST:
      return {
        ...state,
        isSigningUp: true
      };

    case signup.SIGNUP_USER_SUCCESS:
    case login.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isLoggingIn: false,
        isLoggedIn: true,
        firstname: action.data.firstname,
        surname: action.data.surname,
        email: action.data.email,
        photo_url: action.data.photo_url,
        user_id: action.data.user_id,
        error: undefined
      };

    case profile.UPLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        photo_url: action.data.photo_url,
        isFetchingUpload: false
      };
    case profile.EDIT_NAME_SUCCESS:
      return {
        ...state,
        isFetching: false,
        firstname: action.data.firstname,
        surname: action.data.surname
      };
    case profile.GOT_IT_WHATS_NEW_SUCCESS:
      return {
        ...state
      };
    case profile.UPDATE_OPEN_NO_SUCCESS:
      return {
        ...state
      };
    case signup.SIGNUP_USER_FAILURE:
    case login.LOGIN_USER_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        isLoggingIn: false,
        error: action.error
      };
    case profile.EDIT_NAME_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorUpdate: action.error
      };
    case profile.GOT_IT_WHATS_NEW_FAILURE:
      return {
        ...state,
        errorUpdateNo: action.error
      };
    case profile.UPDATE_OPEN_NO_FAILURE:
      return {
        ...state,
        errorOpenNo: action.error
      };
    case profile.UPLOAD_PHOTO_FAILURE:
      return {
        ...state,
        isFetchingUpload: false,
        errorUpload: action.error
      };
    case profile.GET_USERNOS_REQUEST:
      return {
        ...state
      };
    case profile.GET_USERNOS_SUCCESS:
      return {
        ...state,
        user_update_no: action.data.update_no,
        user_open_no: action.data.open_no
      };
    case profile.GET_USERNOS_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
}

function handleChangeName (state, action) {
  if (action.category === 'firstname') {
    return {
      ...state,
      firstname: action.value,
      isFetching: false
    };
  }
  if (action.category === 'surname') {
    return {
      ...state,
      surname: action.value,
      isFetching: false
    };
  }
}
