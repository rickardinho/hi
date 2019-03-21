import React, { Component } from 'react';
import './App.css';

import RoutesContainer from './containers/routes-container';

// import { withAuthentication } from './components/Session';


class App extends Component {
  render () {


    return (
      <div className='App'>

        <RoutesContainer />

      </div>
    );
  }
}

export default App;
