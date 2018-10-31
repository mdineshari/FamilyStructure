const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-228955.oktapreview.com',
  token: '0008DGDqVEuFEaVvrAHbBF8O03wRuIwRK_f1TuNUbY'
});

module.exports = client;