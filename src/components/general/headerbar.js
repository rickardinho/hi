import React from 'react';
import FontAwesome from 'react-fontawesome';
import { LogoWrapper, Row, H3, H4, HeaderbarWrapper, BurgerWrapper } from '../../styles/styles';
import colours from '../../styles/colours';
import Navigation from '../Navigation';

const BurgerIcon = ({ onBurgerClick }) => {

  return (
    <LogoWrapper>
      {<a onClick={onBurgerClick}><FontAwesome name='bars' size='lg'
        style={{ color: colours.blue, textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /></a>}
    </LogoWrapper>
  );

};

const Headerbar = ({onBurgerClick}) => {

    return (
      <HeaderbarWrapper>

        <LogoWrapper>

          <Row>
            <H3>Happy Irrigator&nbsp;</H3>
          </Row>
          <div style={{ borderRadius: 30, background: 'black', borderStyle: 'solid', borderColor: 'black', borderWidth: 1 }}>
            <i style={{ fontSize: 24, color: 'yellow' }} className='fas fa-grin' />
          </div>
          <Row>
            <H4>&nbsp;v2.0</H4>
          </Row>


        </LogoWrapper>
        <Navigation />

        <BurgerWrapper>
          <BurgerIcon onBurgerClick={onBurgerClick} />
        </BurgerWrapper>

      </HeaderbarWrapper>

    );
};

export default Headerbar;
