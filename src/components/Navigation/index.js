import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { NavLink } from '../../styles/styles';
//  default styles - edit in CSS to preserve hover:
import '../../styles/navigation.css';


const Navigation = ({ authUser }) => {
  console.log('authUser', authUser);
  return (
    authUser
    ? <NavigationAuth authUser={authUser} />
    : <NavigationNonAuth />
  );

};


const NavigationAuth = ({ authUser }) => (
  <div style={{ justifyContent: 'flex-end', flexDirection: 'row', borderColor: 'red', borderWidth: 1, borderStyle: 'solid' }}>

    <NavLink to={ROUTES.HOME}>Home</NavLink>

    <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>

    {authUser.roles.includes(ROLES.ADMIN) && (

      <NavLink to={ROUTES.ADMIN}>Admin</NavLink>

    )}


  </div>

);

const NavigationNonAuth = () => (
  <div style={{ justifyContent: 'flex-end' }}>

    <Link className="nav-button" to={ROUTES.LANDING}>Landing</Link>

    <Link className="nav-button" to={ROUTES.SIGN_IN}>Sign In</Link>

  </div>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Navigation);
