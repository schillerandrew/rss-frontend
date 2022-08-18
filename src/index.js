import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import createStore from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTHDOMAIN}
      clientId={process.env.REACT_APP_AUTHCLIENTID}
      redirectUri={window.location.origin}>
      {/* Component Library */}
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}>
        <Provider store={createStore()}>
          <App />
        </Provider>
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
