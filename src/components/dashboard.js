import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

// import { withAuthorization, withEmailVerification } from '../Session';
// import { withFirebase } from '../Firebase';

class Dashboard extends Component {
  componentDidMount () {

  }

  componentWillUnmount () {

  }

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <button type='button' onClick={history.push('farmSummary')}
        >FarmSummary</button>

        <button type='button' onClick={history.push('farmSummary')}
        >FarmSetup</button>

      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const condition = authUser => !!authUser;

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )
)(Dashboard);
