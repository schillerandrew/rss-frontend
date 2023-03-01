import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Text, Group } from '@mantine/core';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <Group>
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
      <Text>After selecting the Log In button, using "Continue with Google" at the bottom is often easiest!</Text>
      </Group>
    </>
  );
};

export default LoginButton;
