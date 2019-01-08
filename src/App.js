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
import Tabbar from './components/Navigation/tabbar';
import Footer from './components/general/footer';
import { store } from './init-store';
import SlidingBurgerContent from './components/general/sliding-burger';
import ModalRoot from './containers/modalRoot';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

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
            
            <Tabbar />


            <Switch>

              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.ADMIN} component={AdminPage} />

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


          <Routes />


      </div>
    );
  }
}

export default App;
