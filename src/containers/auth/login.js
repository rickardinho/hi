import { connect } from 'react-redux';
import Login from '../../components/auth/login';
import { showModal, hideModal } from '../../actions/modal';
import { loginUser, loginUserReset } from '../../actions/auth/login';
import { MODAL_TYPE_SIGNIN, MODAL_TYPE_SIGNUP, MODAL_TYPE_FORGOTPASSWORD } from '../../components/modals/modalTypes';

const mapStateToProps = ({ user, network }) => ({
  // serverError: user.error,
  // isConnected: network.isConnected,
  isLoggingIn: user.isLoggingIn
});

const mapDispatchToProps = dispatch => ({
  handleSubmitForm: ({ email, password }, props, navigation) => { //eslint-disable-line
    dispatch(hideModal());
    dispatch(loginUser(email.toLowerCase(), password, navigation.navigation));

  },
  handleResetLogin: () => {
    dispatch(loginUserReset());
  },
  showSignInModal: () => {
    dispatch(showModal(MODAL_TYPE_SIGNIN, {

    }));
  },
  showSignUpModal: () => {
    dispatch(showModal(MODAL_TYPE_SIGNUP, {

    }));
  },
  hideModal: () => {
    dispatch(hideModal());
  },
  showForgotPasswordModal: () => {
    dispatch(showModal(MODAL_TYPE_FORGOTPASSWORD, {

    }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
