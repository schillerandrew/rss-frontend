import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Auth = (props) => {
  return (
    <>
      {props.auth0.isAuthenticated ? (
        <>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
};
export default withAuth0(Auth);
