import React from 'react';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import { NavBarStyles, NavbarWrapper, NavButtonWrapper } from '../../styles/styles';

// react-router-tabs default styles - edit in CSS to preserve hover:
import '../../styles/navigation-tabs.css';

const TabContainerStyle = NavBarStyles.tabContainer;

const Tabbar = ({ authUser }) => (
  authUser ? (
    <TabbarAuth authUser={authUser} />
  ) : (
    <TabbarNonAuth />
  ));


const TabbarAuth = ({  }) => (

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

const TabbarNonAuth = ({  }) => (

  <div />
);


export default Tabbar;
