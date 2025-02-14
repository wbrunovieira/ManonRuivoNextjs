// src/app/page.tsx
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

function parseAcceptLanguage(
  acceptLanguage: string
): string {
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, qValue] = lang.split(';q=');
      return {
        code: code.trim(),
        q: qValue ? parseFloat(qValue) : 1.0,
      };
    })
    .sort((a, b) => b.q - a.q);
  return languages[0]?.code || '';
}

export default async function RootPage() {
  const requestHeaders = await headers();
  const acceptLanguage =
    requestHeaders.get('accept-language') || '';
  console.log('acceptLanguage page', acceptLanguage);

  const preferred = parseAcceptLanguage(acceptLanguage);
  console.log('Preferred language:', preferred);

  let locale: 'en' | 'pt' | 'es' = 'en';
  const lowerPref = preferred.toLowerCase();

  if (lowerPref.includes('pt')) {
    locale = 'pt';
  } else if (lowerPref.includes('es')) {
    locale = 'es';
  } else if (lowerPref.includes('en')) {
    locale = 'en';
  }

  console.log('locale do page', locale);
  redirect(`/${locale}`);
}
