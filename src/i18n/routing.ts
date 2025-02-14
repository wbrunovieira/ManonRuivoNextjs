import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pt', 'es'],

  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: true,
});

console.log('locales do routing', routing.locales);
console.log(
  'locales do routing localeDetection',
  routing.localeDetection
);
console.log(' routing', routing);
