import React from 'react';
import { connect } from 'react-redux';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import { NavBarStyles, NavbarWrapper, NavButtonWrapper } from '../../styles/styles';

// react-router-tabs default styles - edit in CSS to preserve hover:
import '../../styles/navigation-tabs.css';

const TabContainerStyle = NavBarStyles.tabContainer;

const Navbar = ({ authUser }) => (
  authUser ? (
    <NavbarAuth authUser={authUser} />
  ) : (
    <NavbarNonAuth />
  ));


const NavbarAuth = ({ authUser }) => (

  <NavbarWrapper>

    <NavButtonWrapper>

      <RoutedTabs style={TabContainerStyle}>

        <NavTab to='/farmSummary'>
          Farm Summary
        </NavTab>

        <NavTab to='/farmInfo'>
          Farm Information
        </NavTab>

        <NavTab to='/fieldDetails'>
          Field & Crop Details
        </NavTab>


      </RoutedTabs>


    </NavButtonWrapper>
    <div className='nav-tab-spacer-div' />


  </NavbarWrapper>

);

const NavbarNonAuth = ({ authUser }) => (

  <div />
);


const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Navbar);
