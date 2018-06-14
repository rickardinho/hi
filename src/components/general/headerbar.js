import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './burger.js';
import { Row, Block, H2, H3, H4, NavButton, NavLabel, HeaderbarWrapper, NavButtonWrapper, Logo, LogoName, LogoWrapper, BurgerWrapper } from './../../styles/styles';
import sparkIcon from './../../images/icons/sparkLogo.png';
import sparkName from './../../images/spark2.png';

const Navbar = () => {

    return (
        <HeaderbarWrapper>

          <LogoWrapper>

              <Row>
                <H3>Happy Irrigator</H3>
              </Row>
              
              <Row>
                <H4>v2.0</H4>
              </Row>

          </LogoWrapper>

          <BurgerWrapper>
            <BurgerMenu />
          </BurgerWrapper>

        </HeaderbarWrapper>

    );
};

export default Navbar;
