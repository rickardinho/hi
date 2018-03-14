import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger.js';
import { NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, Logo, LogoName, LogoWrapper, BurgerWrapper } from './../../styles/styles';
import sparkIcon from './../../images/icons/sparkLogo.png';
import sparkName from './../../images/spark2.png';

const Navbar = () => {

    return (
        <NavbarWrapper>


              <LogoWrapper>
                <Logo src={sparkIcon} alt="HI Icon" height="50"/>
                <LogoName src={sparkName} alt="Happy Irrigator" height="40"/>
              </LogoWrapper>

              <NavButtonWrapper>
                <Link to="/">
                    <NavButton>

                        <NavLabel>Farm Summary</NavLabel>
                    </NavButton>
                </Link>

                <Link to="/detail">
                    <NavButton>

                        <NavLabel>Farm Details</NavLabel>
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
