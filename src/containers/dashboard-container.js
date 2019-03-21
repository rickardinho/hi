import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';


const mapStateToProps = ({ user }) => {
  // console.log('this.state:', this.state);

  return {
    isLoggingIn: user.isLoggingIn,
  };

};

const mapDispatchToProps = (dispatch) => {

    return {


    };
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
