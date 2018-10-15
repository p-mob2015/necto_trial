// Package imports
import React from 'react';
import { Security } from '@okta/okta-react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

// In-project imports
import CONFIG from 'config';
import Routes from 'pages/Routes';
import basicTheme from 'themes/basic';

/*
 * Component: Application Root
 */
const App = () => (
  <ThemeProvider theme={basicTheme}>
    <BrowserRouter>
      <Security issuer={CONFIG.okta.issuer}
                client_id={CONFIG.okta.clientId}
                redirect_uri={CONFIG.okta.redirectURI}
      >
        <Routes />
      </Security>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
