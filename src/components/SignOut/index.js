import React from 'react';
import { SignoutButton } from '../../styles/styles';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <SignoutButton onClick={firebase.doSignOut}>
    Sign Out
  </SignoutButton>
);

export default withFirebase(SignOutButton);
