import { connect } from 'react-redux';
import TabBar from '../../components/Navigation/navbar';
import { persistor, store } from '../../init-store';
import { logout } from '../../actions/auth/profile';
import { } from '../../actions/create';
import * as ROUTES from '../../constants/routes';


const mapStateToProps = ({ }) => {
  // console.log('this.state:', this.state);

  return {

  };

};

const mapDispatchToProps = dispatch => ({
  handleLogOut: () => {
    localStorage.removeItem('spark_token')
    .then(() => {
      localStorage.removeItem('spark_user_id')
      .then(() => {

        history.push(ROUTES.LANDING);

        // const rootNavigator = nav.getNavigator('root');
        // rootNavigator.replace('auth');
        // clean up persisted state
        persistor.purge();
        // store.getState().network.socket.disconnect();
        dispatch(logout());
        // redirect
      });
    });
  }
});

const TabBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TabBar);

export default TabBarContainer;
