require('dotenv').config({ path: '.env' });

const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

module.exports = withPlugins([[withSvgr]], {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  env: {
    apiRoot: 'https://private-143a4-reactboilerplate2.apiary-mock.com/',
    algoliaId: '',
    algoliaKey: '',
    algoliaIndex: '',
  },
  poweredByHeader: false,
});
