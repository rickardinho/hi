import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faComments, faQuestion, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import history from './history';
import * as ROUTES from '../../constants/routes';
// import * as ROLES from '../../constants/roles';
import { NavLink, Row, MenuButton, Column, NavButton, DropDownButton, LogoWrapper } from '../../styles/styles';
import { D4, H3, T4 } from '../../styles/text';
import colours from '../../styles/colours';
import palette from '../../styles/palette';
import DropdownMenu from '../general/dropdown-menu';
import DropdownPoints from '../general/dropdown-points';
import DropdownMenuValue from '../general/dropdown-menuValue';
import DropdownDateValue from '../general/dropdown-dateValue';
//  default styles - edit in CSS to preserve hover:
import '../../styles/navigation.css';


class NavBar extends Component {


  constructor () {
    super();
    this.state = {
      width: window.innerWidth
    };
    this.showSignInModal = this.showSignInModal.bind(this);
    this.showSignUpModal = this.showSignUpModal.bind(this);
  }

  componentWillMount () {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  goToLanding = () => {

    console.log('go to login');
    // history.push(ROUTES.LANDING);

  };

  showSignInModal () {
    const { showSignInModal } = this.props;

    showSignInModal();

  }

  showSignUpModal () {
    const { showSignUpModal } = this.props;

    showSignUpModal();
  }

  render () {
    const { handleLogOut, isLoggedIn, firstname, handleBurgerClick, burgerIsOpen } = this.props;
    const { width } = this.state;
    console.log('isLoggedIn', isLoggedIn);
    return (
      isLoggedIn
      ? <NavigationAuth handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} firstname={firstname} screenWidth={width} goToLanding={this.goToLanding} onBurgerClick={handleBurgerClick} burgerIsOpen={burgerIsOpen} />
      : <NavigationNonAuth handleLogOut={handleLogOut} screenWidth={width} showSignInModal={this.showSignInModal} showSignUpModal={this.showSignUpModal} />
    );
  }

}

const BurgerIcon = ({ onBurgerClick }) => {

  return (
    <LogoWrapper>
      {<a onClick={onBurgerClick}>
        <FontAwesomeIcon
          icon={faBars}
          size='lg'
          style={{ color: palette.navButton, textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
      </a>}
    </LogoWrapper>
  );

};

const MenuTabs = ({ screenWidth }) => {
  const rowItems = (
    <Row>
      <DropdownMenuValue
        value='From'
        dataType='menu'
        options={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}
      />
      <DropdownMenuValue
        value='To'
        dataType='menu'
        options={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}
      />
      <DropdownMenuValue
        value='Children'
        dataType='menu'
        options={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}
      />
      <Column style={{ width: 30, background: colours.purple, justifyContent: 'center', alignItems: 'center' }}>

        <FontAwesomeIcon
          icon={faSearch}
          size='x2'
          style={{ color: colours.white }} />

      </Column>
    </Row>
  );


  const flexibleItems = (
    <DropdownDateValue
      value='When do you need a sitter?'
      dataType='menu'
      options={[{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]}
    />

  );

  return (
    (screenWidth < 910)
    ? <Column style={{ flex: 1, borderWidth: 1, borderStyle: 'solid', borderColor: colours.gray }}>
      {flexibleItems}
      {rowItems}
    </Column>
    : <Row style={{ flex: 1, borderWidth: 1, borderStyle: 'solid', borderColor: colours.gray }}>
      {flexibleItems}
      {rowItems}
    </Row>
  );

};

const OtherMenuTabs = ({ orientation, handleLogOut, onBurgerClick, burgerIsOpen }) => {
  console.log('orientation: ', orientation);

  if (orientation === 'burger') {
    return (
      <div style={{ borderColor: 'red', borderWidth: 1, borderStyle: 'solid' }}>
        <BurgerIcon onBurgerClick={() => onBurgerClick(burgerIsOpen)} />
      </div>
    );
  }

  return (
    <div style={{ height: 60, display: 'flex', flex: 4, flexDirection: orientation, borderWidth: 0, borderStyle: 'solid', borderColor: 'green' }}>
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
};


const NavigationAuth = ({ firstname, handleLogOut, screenWidth, goToLanding, onBurgerClick, burgerIsOpen }) => (
  <div style={{ flexDirection: 'row', alignItems: 'center', flex: 1, display: 'flex' }}>
    <div style={{ height: '100%', flexDirection: 'column', flex: 1, display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 8, justifyContent: 'flex-end', flex: 1, borderWidth: 0, borderStyle: 'solid', borderColor: colours.red }}>
        <D4>Logged in as</D4>
        <D4 style={{ color: colours.red }}>&nbsp;{firstname}&nbsp;</D4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, borderWidth: 1, borderStyle: 'solid', borderColor: colours.gray }}>

        <Column onClick={goToLanding} style={{ height: 60, background: colours.purple, cursor: 'pointer' }}>

          <Row style={{ alignItems: 'center', height: '100%', width: 140 }}>
            <H3 style={{ color: colours.white }}>SitterPoint&nbsp;</H3>
          </Row>


        </Column>

        <Row style={{ flex: 5, paddingLeft: 8, paddingRight: 8, borderWidth: 0, borderStyle: 'solid', borderColor: 'green', alignItems: 'center' }}>

          <MenuTabs screenWidth={screenWidth} />

        </Row>

        {
          (screenWidth < 700)
          ? <OtherMenuTabs orientation='burger' burgerIsOpen={burgerIsOpen} onBurgerClick={onBurgerClick} handleLogOut={handleLogOut} />

          : <OtherMenuTabs orientation='row' handleLogOut={handleLogOut} />
        }


      </div>

    </div>
  </div>

);

const NavigationNonAuth = ({ showSignInModal, showSignUpModal, screenWidth }) => (

  <Column style={{ width: '100%' }}>


    <div style={{ height: 60, paddingLeft: 8, paddingRight: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, borderWidth: 0, borderStyle: 'solid', borderColor: colours.gray }}>
      {
        (screenWidth > 700) &&
        <div style={{ flex: 3 }} />
      }
      <NavButton

        type='button'
        onClick={() => history.push(ROUTES.ABOUT)}

      >

        <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <T4 style={{ }}>How it works</T4>
        </div>
      </NavButton>

      <NavButton
        type='button'
        onClick={showSignInModal}
      >
        <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <T4 style={{ }}>Sign in</T4>
        </div>
      </NavButton>
      <NavButton
        style={{ background: palette.navButtonContrast }}
        type='button'
        onClick={showSignUpModal}

      >

        <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <T4 style={{ color: colours.white }}>Create an account</T4>
        </div>
      </NavButton>

    </div>
  </Column>


);

export default NavBar;
