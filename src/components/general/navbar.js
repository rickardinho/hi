import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger.js';
import { Row, Block, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, NavHelpWrapper, Logo, LogoName, LogoWrapper, BurgerWrapper } from './../../styles/styles';
import sparkIcon from './../../images/icons/sparkLogo.png';
import sparkName from './../../images/spark2.png';

const Navbar = () => {

    return (
        <NavbarWrapper>

          <NavButtonWrapper>

            <Link to="/">
                <NavButton>
                    <NavLabel>Farm Summary</NavLabel>
                </NavButton>
            </Link>

            <Link to="/farmInfo">
                <NavButton>
                    <NavLabel>Farm Information</NavLabel>
                </NavButton>
            </Link>

            <Link to="/fieldDetails">
                <NavButton>
                    <NavLabel>Field & Crop Details</NavLabel>
                </NavButton>
            </Link>

          </NavButtonWrapper>

          <NavHelpWrapper>

            <Link to="help">
                <NavButton>
                    <NavLabel>Help</NavLabel>
                </NavButton>
            </Link>

          </NavHelpWrapper>



        </NavbarWrapper>
    );
};

export default Navbar;
