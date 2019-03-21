import { connect } from 'react-redux';
import Signup from '../../components/auth/signup';
import { showModal, hideModal } from '../../actions/modal';
import { signupUser } from '../../actions/auth/signup';
import { MODAL_TYPE_SIGNIN, MODAL_TYPE_SIGNUP, MODAL_TYPE_FORGOTPASSWORD } from '../../components/modals/modalTypes';


const mapStateToProps = ({ user, network }) => ({
  isSigningUp: user.isSigningUp,
  isConnected: network.isConnected,
  serverError: user.error
});

const mapDispatchToProps = dispatch => ({
  handleSubmitForm: ({ firstname, surname, email, password }, props) => {
    dispatch(signupUser(firstname, surname, email.toLowerCase(), password, props.navigation));
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
