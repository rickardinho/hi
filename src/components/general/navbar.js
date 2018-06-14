import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger.js';
import { Block, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, Logo, LogoName, LogoWrapper, BurgerWrapper } from './../../styles/styles';
import sparkIcon from './../../images/icons/sparkLogo.png';
import sparkName from './../../images/spark2.png';

const Navbar = () => {

    return (
        <NavbarWrapper>


              <LogoWrapper>
                <Block>
                  <H2>Happy Irrigator</H2>
                  <H4>v2.0</H4>
                </Block>
              </LogoWrapper>

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


                <Link to="/about">
                    <NavButton>
                        <NavLabel>About</NavLabel>
                    </NavButton>
                </Link>

                <Link to="help">
                    <NavButton>
                        <NavLabel>Help</NavLabel>
                    </NavButton>
                </Link>


              </NavButtonWrapper>

              <BurgerWrapper>
                <BurgerMenu />
              </BurgerWrapper>



        </NavbarWrapper>
    );
};

export default Navbar;
