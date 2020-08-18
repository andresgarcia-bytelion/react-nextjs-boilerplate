require('dotenv').config({ path: '.env' });

const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

module.exports = withPlugins([[withSvgr]], {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  env: {
    algoliaId: '',
    algoliaKey: '',
    algoliaIndex: '',
    apiRoot: 'https://private-143a4-reactboilerplate2.apiary-mock.com',
    auth0ClientId: process.env.AUTH0_CLIENT_ID,
    auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
    auth0Domain: process.env.AUTH0_DOMAIN,
  },
  poweredByHeader: false,
});
