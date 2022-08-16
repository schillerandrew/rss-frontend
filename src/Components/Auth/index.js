import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const Auth = (props) => {
  return (
    <>
      {props.auth0.isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
};
export default withAuth0(Auth);
