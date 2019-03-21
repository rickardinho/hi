import { connect } from 'react-redux';
import Landing from '../../components/auth/landing';
import { showModal, hideModal } from '../../actions/modal';
import { loginUser, loginUserReset } from '../../actions/auth/login';
import { MODAL_TYPE_CHART, MODAL_TYPE_OTHER, MODAL_TYPE_SIGNIN, MODAL_TYPE_SIGNUP } from '../../components/modals/modalTypes';

const mapStateToProps = ({ user, network }) => ({
  // serverError: user.error,
  // isConnected: network.isConnected,
  isLoggingIn: user.isLoggingIn
});

const mapDispatchToProps = dispatch => ({
  handleSubmitForm: ({ email, password }, props, navigation) => { //eslint-disable-line
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
