import React from 'react';
import { Link } from 'react-router-dom';
import { Row, H3, H4, LogoWrapper, NavButton, NavLabel, BurgerDiv } from '../../styles/styles';
import colours from '../../styles/colours';


const SlidingBurgerContent = ({ onBurgerClick }) => (

  <BurgerDiv onClick={() => onBurgerClick()}>
    <div>
      <NavButton>
        <LogoWrapper>

          <Row style={{ background: colours.verylightgray }}>
            <H3>Happy Irrigator&nbsp;</H3>
          </Row>
          <div style={{ borderRadius: 30, background: 'black', borderStyle: 'solid', borderColor: 'black', borderWidth: 1 }}>
            <i style={{ fontSize: 24, color: 'yellow' }} className='fas fa-grin' />
          </div>
          <Row style={{ background: colours.verylightgray }}>
            <H4>&nbsp;v2.0</H4>
          </Row>


        </LogoWrapper>
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


  </BurgerDiv>

);

export default SlidingBurgerContent;
