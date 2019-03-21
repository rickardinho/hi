import { connect } from 'react-redux';
import { openBurger, closeBurger } from '../actions/navbar';
import Routes from '../components/routes';

const mapStateToProps = ({ nav }) => {
    // console.log('state: ', state);

    return {
      burgerIsOpen: nav.burgerIsOpen
    };
};

const mapDispatchToProps = dispatch => ({

  handleBurgerClick: (burgerIsOpen) => {
    console.log('routecontainer click:', burgerIsOpen);
    if (burgerIsOpen) {
      dispatch(closeBurger());
    } else {
      dispatch(openBurger());
    }
  },
  handleCloseBurger: () => {
    dispatch(closeBurger());
  }
});

const RoutesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);

export default RoutesContainer;
