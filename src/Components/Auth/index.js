import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { Box, Group } from '@mantine/core';

const Auth = (props) => {
  return (
    <>
      {props.auth0.isAuthenticated ? (
        <>
          <Box sx={{ maxWidth: 400 }} mx='auto'>
            <Group align='center'>
              <Profile />
              <LogoutButton />
            </Group>
          </Box>
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
};
export default withAuth0(Auth);
