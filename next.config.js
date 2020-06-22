require('dotenv').config({ path: '.env' });

const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

module.exports = withPlugins([[withSvgr]], {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  env: {},
  poweredByHeader: false,
});
