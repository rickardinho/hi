import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Sidebar from 'react-sidebar';
// import logo from './logo.svg';
import './App.css';
import FarmSummary from './components/farmSummary';
import About from './components/about';
import FarmInfo from './components/farmInfo';
// import FieldDetails from './components/fieldDetails';
import FieldDetailsContainer from './containers/fieldDetails-container';
import Help from './components/help';
import Headerbar from './components/general/headerbar';
import Navbar from './components/general/navbar';
import Footer from './components/general/footer';
import { store } from './init-store';
import SlidingBurgerContent from './components/general/sliding-burger';
import ModalRoot from './containers/modalRoot';

class Routes extends Component {

  constructor (props) {
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
              <Route exact path='/' render={() => <Redirect replace to='/farmSummary' />} />
              <Route path='/farmSummary' component={ FarmSummary } />
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
