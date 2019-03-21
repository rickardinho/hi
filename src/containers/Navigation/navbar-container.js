import { connect } from 'react-redux';
import NavBar from '../../components/Navigation/navbar';
import { persistor, store } from '../../init-store';
import { logout } from '../../actions/auth/signup';
import { showModal, hideModal } from '../../actions/modal';
import { openBurger, closeBurger } from '../../actions/navbar';
import * as ROUTES from '../../constants/routes';
import history from '../../components/Navigation/history';
import { MODAL_TYPE_SIGNIN, MODAL_TYPE_SIGNUP } from '../../components/modals/modalTypes';

const mapStateToProps = ({ user, nav }) => {
  // console.log('this.state:', this.state);
  console.log('localStorage: ', localStorage);
  return {
    isLoggedIn: user.isLoggedIn,
    isLoggingIn: user.isLoggingIn,
    firstname: user.firstname,
    burgerIsOpen: nav.burgerIsOpen
  };

};

const mapDispatchToProps = dispatch => ({
  handleLogOut: () => {
    console.log('localStorage: ', localStorage);
    localStorage.removeItem('spark_token');

    localStorage.removeItem('spark_user_id');

    history.push(ROUTES.LANDING);

    // const rootNavigator = nav.getNavigator('root');
    // rootNavigator.replace('auth');
    // clean up persisted state
    persistor.purge();
    // store.getState().network.socket.disconnect();
    dispatch(logout());
    // redirect

  },
  
  handleBurgerClick: (burgerIsOpen) => {
    if (burgerIsOpen) {
      dispatch(closeBurger());
    } else {
      dispatch(openBurger());
    }
  },
  handleCloseBurger: () => {
    dispatch(closeBurger());
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

const NavBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);

export default NavBarContainer;
