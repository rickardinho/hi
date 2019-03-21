import React from 'react';
import { Link } from 'react-router-dom';
import { NavButton, NavLabel, BurgerDiv } from '../../styles/styles';
import SignOutButton from '../SignOut';

const SlidingBurgerContent = ({ onBurgerClick }) => (

  <BurgerDiv onClick={() => onBurgerClick()}>
    <div>
      <NavButton>

      </NavButton>
    </div>

    <Link to='/' onClick={() => this.closeMenu()}>
        <NavButton>

            <NavLabel>Farm Summary</NavLabel>
        </NavButton>
    </Link>


    <Link to='/farmInfo' onClick={() => this.closeMenu()}>
        <NavButton>

            <NavLabel>Farm Information</NavLabel>
        </NavButton>
    </Link>

    <Link to='/fieldDetails' onClick={() => this.closeMenu()}>
        <NavButton>

            <NavLabel>Field & Crop Details</NavLabel>
        </NavButton>
    </Link>

    <Link to='/help' onClick={() => this.closeMenu()}>
        <NavButton>

            <NavLabel>Help</NavLabel>
        </NavButton>
    </Link>

    <Link to='/about' onClick={() => this.closeMenu()}>
        <NavButton>

            <NavLabel>About</NavLabel>
        </NavButton>
    </Link>

    <SignOutButton />


  </BurgerDiv>

);

export default SlidingBurgerContent;
