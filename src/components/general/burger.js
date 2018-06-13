import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import { NavButton, NavLabel, NavbarWrapper, BurgerStyles } from './../../styles/styles';

class BurgerMenu extends Component {

  render () {
    return (
      <Menu styles={ BurgerStyles } id={ "sidebar" } className={ "burger-menu" } right>

        <Link to="/">
            <NavButton>

                <NavLabel>Farm Summary</NavLabel>
            </NavButton>
        </Link>

        <Link to="fieldDetails">
            <NavButton>

                <NavLabel>Farm Details</NavLabel>
            </NavButton>
        </Link>

        <Link to="help">
            <NavButton>

                <NavLabel>Help</NavLabel>
            </NavButton>
        </Link>


        <Link to="/about">
            <NavButton>

                <NavLabel>About</NavLabel>
            </NavButton>
        </Link>


      </Menu>
    );
  }
}

export default BurgerMenu;
