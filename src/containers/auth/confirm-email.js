import { connect } from 'react-redux';
import ConfirmEmail from '../../components/auth/confirm-email';
import { confirmEmail } from '../../actions/auth/confirm-email';

const mapStateToProps = ({ confirmUserEmail, network }) => ({
  // message: confirmUserEmail.message,
  // confirmEmailError: confirmUserEmail.error,
  // isConfirming: confirmUserEmail.isConfirming,
  // isConnected: network.isConnected
});

const mapDispatchToProps = () => ({
  handleSubmitForm: ({ email }, dispatch, props) => { //eslint-disable-line
    dispatch(confirmEmail(email.toLowerCase()));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);
