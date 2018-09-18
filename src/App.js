import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Sidebar from 'react-sidebar';
import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import About from './components/about.js';
import FarmInfo from './components/farmInfo.js';
import FieldDetails from './components/fieldDetails.js';
import FieldDetailsContainer from './containers/fieldDetails-container';
import Help from './components/help.js';
import Headerbar from './components/general/headerbar.js';
import Navbar from './components/general/navbar.js';
import Footer from './components/general/footer.js';
import { store } from './init-store.js';
import SlidingBurgerContent from './components/general/sliding-burger.js';
import ModalRoot from './containers/modalRoot';

class Routes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onBurgerClick = this.onBurgerClick.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  onBurgerClick() {
    console.log('clicked');
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }

  render () {

    const sidebarContent = <SlidingBurgerContent onBurgerClick={this.onBurgerClick} />



    return (



      <Router>
        <Sidebar sidebar={sidebarContent}
             open={this.state.sidebarOpen}
             onSetOpen={this.onSetSidebarOpen}
             pullRight
             shadow
        >
          <div>
            <Headerbar onBurgerClick={this.onBurgerClick} />
            <Navbar />

            <Switch>

            <Route exact path="/" component={ Home } />
            <Route path='/farmInfo' component={ FarmInfo } />
            <Route path='/fieldDetails' component={ FieldDetailsContainer } />
            <Route path='/about' component={ About } />
            <Route path='/help' component={ Help } />

            </Switch>

            <ModalRoot />


            <Footer />


          </div>

        </Sidebar>
      </Router>

    );
  }



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
