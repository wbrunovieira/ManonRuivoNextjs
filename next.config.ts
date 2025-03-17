const withBundleAnalyzer = require('@next/bundle-analyzer')(
  {
    enabled: process.env.ANALYZE === 'true',
  }
);
const withNextIntl = require('next-intl/plugin')();

module.exports = withBundleAnalyzer(
  withNextIntl({
    images: {
      domains: ['cdn.sanity.io'],
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value:
                "default-src 'self'; connect-src 'self' https://e2glo6ep.apicdn.sanity.io; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value:
                'geolocation=(), microphone=(), camera=()',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
          ],
        },
      ];
    },
  })
);
