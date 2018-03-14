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
                <Logo src={sparkIcon} alt="SparkIcon" height="50"/>
                <LogoName src={sparkName} alt="SparkName" height="40"/>
              </LogoWrapper>

              <NavButtonWrapper>
                <Link to="/">
                    <NavButton>

                        <NavLabel>Home</NavLabel>
                    </NavButton>
                </Link>


                <Link to="/about">
                    <NavButton>

                        <NavLabel>About</NavLabel>
                    </NavButton>
                </Link>

                <Link to="download">
                    <NavButton>

                        <NavLabel>Download</NavLabel>
                    </NavButton>
                </Link>

                <Link to="help">
                    <NavButton>

                        <NavLabel>Help</NavLabel>
                    </NavButton>
                </Link>

                <Link to="press">
                    <NavButton>

                        <NavLabel>Press</NavLabel>
                    </NavButton>
                </Link>

                <Link to="contact">
                    <NavButton>

                        <NavLabel>Contact</NavLabel>
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
