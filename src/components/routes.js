import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from 'react-sidebar';

import Tabbar from './Navigation/tabbar';
import DashboardContainer from '../containers/dashboard-container';
import About from './about';
import Help from './help';
import Headerbar from './general/headerbar';
import Footer from './general/footer';
import SlidingBurgerContent from './Navigation/slidingburger';
import ModalRoot from '../containers/modalRoot';
import LandingContainer from '../containers/auth/landing';
import LoginContainer from '../containers/auth/login';
import SignupContainer from '../containers/auth/signup';
import ConfirmEmailContainer from '../containers/auth/confirm-email';
import Account from './Account';
import FarmSummaryContainer from '../containers/farmSummary-container';
import FarmInfoContainer from '../containers/farmInfo-container';
// import FieldDetails from './components/fieldDetails';
import FieldDetailsContainer from '../containers/fieldDetails-container';
import history from './Navigation/history';

import * as ROUTES from '../constants/routes';
// import { withAuthentication } from './components/Session';

class Routes extends Component {


  render () {

    // const { sidebarOpen } = this.state;
    const { burgerIsOpen, handleBurgerClick } = this.props;

    const sidebarContent = <SlidingBurgerContent onBurgerClick={handleBurgerClick} burgerIsOpen={burgerIsOpen} />;

    return (


      <Router history={history}>
        <Sidebar sidebar={sidebarContent}
          open={burgerIsOpen}
          onSetOpen={handleBurgerClick}
          pullRight
          shadow
        >
          <div>
            <Headerbar />

            <Tabbar />


            <Switch>

              <Route exact path={ROUTES.LANDING} component={LandingContainer} />
              <Route path={ROUTES.SIGN_UP} component={SignupContainer} />
              <Route path={ROUTES.SIGN_IN} component={LoginContainer} />
              <Route
                path={ROUTES.PASSWORD_FORGET}
                component={ConfirmEmailContainer}
              />
          
              <Route exact path='/' render={() => <Redirect replace to={ROUTES.FARM_SUMMARY} />} />
              <Route path={ROUTES.DASHBOARD} component={ DashboardContainer } />
              <Route path={ROUTES.FARM_SUMMARY} component={ FarmSummaryContainer } />
              <Route path={ROUTES.FARM_INFO} component={ FarmInfoContainer } />
              <Route path={ROUTES.FIELD_DETAILS} component={ FieldDetailsContainer } />
              <Route path={ROUTES.ACCOUNT} component={Account} />


            </Switch>

            <ModalRoot />


            <Footer />


          </div>

        </Sidebar>
      </Router>

    );
  }


}


export default Routes;
