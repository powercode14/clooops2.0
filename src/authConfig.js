// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: '18741ce5-0eec-4cdf-89c1-f1d5e4a6b306',
    authority:
      'https://login.microsoftonline.com/c6fca2b4-afb7-4895-a749-26dd7c4e20cd',
    redirectUri: 'http://localhost:3000',
    // postLogoutRedirectUri: '/',
  },
  cache: {
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ['User.Read'],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com',
};
