import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-g1dh57yk.us.auth0.com'
      clientId='UjeBPPYGrAbjKL8b29B63acSViCxzATV'
      redirectUri={window.location.origin}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
