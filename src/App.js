import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import FarmInfo from './components/farmInfo.js';
import FieldDetails from './components/fieldDetails.js';
import Help from './components/help.js';
import Headerbar from './components/general/headerbar.js';
import Navbar from './components/general/navbar.js';
import Footer from './components/general/footer.js';
import { store } from './init-store.js';

const Routes = () => {

  return (



    <Router>
      <div>
        <Headerbar />
        <Navbar />

        <Route exact path="/" component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/farmInfo' component={ FarmInfo } />
        <Route path='/fieldDetails' component={ FieldDetails } />

        <Route path='/help' component={ Help } />


        <Footer />


      </div>
    </Router>

  );

}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={ store } >

          <Routes />

        </Provider>
      </div>
    );
  }
}

export default App;
