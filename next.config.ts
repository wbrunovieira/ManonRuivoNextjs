// next.config.js
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  images: {
    domains: ['cdn.sanity.io'],
  },
});
