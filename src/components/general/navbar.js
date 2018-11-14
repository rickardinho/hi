import React from 'react';
import { Link } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import { NavBarStyles, Row, Block, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, NavHelpWrapper, Logo, LogoName, LogoWrapper, BurgerWrapper } from './../../styles/styles';
import sparkIcon from './../../images/icons/sparkLogo.png';
import sparkName from './../../images/spark2.png';

// react-router-tabs default styles - edit in CSS to preserve hover:
import '../../styles/navigation-tabs.css';

const TabContainerStyle = NavBarStyles.tabContainer;

const Navbar = () => {


    return (
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


      </NavbarWrapper>
    );
};

export default Navbar;
