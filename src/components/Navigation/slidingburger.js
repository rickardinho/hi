import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faComments, faQuestion, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavButton, NavLabel, BurgerDiv, MenuButton, LogoWrapper } from '../../styles/styles';
import { DrawerItemText, D4 } from '../../styles/text';
import colours from '../../styles/colours';
import history from './history';
import * as ROUTES from '../../constants/routes';
import DropdownMenu from '../general/dropdown-menu';
import DropdownPoints from '../general/dropdown-points';

const BurgerIcon = ({ onBurgerClick }) => {

  return (
    <LogoWrapper>
      {<a onClick={onBurgerClick}>
        <FontAwesomeIcon
          icon={faBars}
          size='lg'
          style={{ color: colours.blue, textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
      </a>}
    </LogoWrapper>
  );

};

const SlidingBurgerContent = ({ onBurgerClick, handleLogOut, burgerIsOpen }) => (

  <div style={{ height: 200, width: 200, flexDirection: 'column', borderWidth: 0, borderStyle: 'solid', borderColor: 'green' }}>
    <div style={{ borderColor: 'red', borderWidth: 1, borderStyle: 'solid' }}>
      <BurgerIcon onBurgerClick={() => onBurgerClick(burgerIsOpen)} />
    </div>

    <div style={{ flex: 1, borderWidth: 0, borderRightWidth: 1, borderStyle: 'solid', borderColor: colours.gray, justifyContent: 'center', alignItems: 'center' }}>

      <DropdownMenu
        value='Help'
        icon={faQuestion}
        iconSize='lg'
        dataType='menu'
        options={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}
      />

    </div>

    <div style={{ flex: 1, borderWidth: 0, borderRightWidth: 1, borderStyle: 'solid', borderColor: colours.gray, justifyContent: 'center', alignItems: 'center' }}>
      <DropdownMenu
        value='Messages'
        icon={faComments}
        iconSize='lg'
        dataType='menu'
        options={[{ value: 'Become a verified member with DBS + 60 SP' }, { value: 'Complete your profile + ' }, { value: 3 }, { value: 4 }]}
      />
    </div>
    <div style={{ flex: 1, borderWidth: 0, borderRightWidth: 1, borderStyle: 'solid', borderColor: colours.gray, justifyContent: 'center', alignItems: 'center' }}>
      <DropdownPoints
        value={200}
        dataType='menu'
        options={[
          { text: 'Become a verified member with DBS', points: `+ ${60}`, unit: 'SP' },
          { text: 'Complete your profile', points: `+ ${20}`, unit: 'SP' },
          { text: 'Contact 5 families', points: `+ ${20}`, unit: 'SP' },
          { text: 'Refer your friends', points: `+ ${20}`, unit: 'SP' },
          { text: 'Become a gold member', points: `+ ${20}`, unit: 'SP' },
          { text: `You have ${20} sitter points`, points: 'View all' }
        ]}
      />
    </div>
    <div style={{ flex: 1, borderWidth: 0, borderRightWidth: 1, borderStyle: 'solid', borderColor: colours.gray, justifyContent: 'center', alignItems: 'center' }}>
      <DropdownMenu
        value='Profile'
        icon={faUserCircle}
        iconSize='2x'
        dataType='menu'
        options={[
          { route: ROUTES.DASHBOARD, value: 'Family profile', blurb: 'Complete your profile and earn 200 SitterPoints!', progress: 50 },
          { route: ROUTES.ABOUT, value: 'My skills as a parent', blurb: 'Complete your skills and earn 200 SitterPoints!', progress: 25 },
          { route: ROUTES.DASHBOARD, value: 'My diary' },
          { route: ROUTES.DASHBOARD, value: 'My favourite families' },
          { route: ROUTES.DASHBOARD, value: 'They love our family' },
          { route: ROUTES.DASHBOARD, value: 'My plan' },
          { route: ROUTES.DASHBOARD, value: 'My settings' },
          <MenuButton onClick={handleLogOut} style={{ justifyContent: 'flex-start' }}><D4 style={{ textAlign: 'left' }}>Log Out</D4></MenuButton>
        ]}
      />
    </div>
  </div>


);

export default SlidingBurgerContent;
