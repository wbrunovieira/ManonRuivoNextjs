import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
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

function isValidLocale(
  lang: string
): lang is 'en' | 'pt' | 'es' {
  return ['en', 'pt', 'es'].includes(lang);
}

export default getRequestConfig(
  async ({ requestLocale }) => {
    let locale = await requestLocale;

    // Se o locale não foi definido, tenta extrair da URL usando o header 'referer'
    if (!locale) {
      const referer = (await headers()).get('referer');
      if (referer) {
        try {
          const url = new URL(referer);
          const segments = url.pathname.split('/');
          if (
            segments.length > 1 &&
            isValidLocale(segments[1])
          ) {
            locale = segments[1];
          }
        } catch (err) {
          console.error(
            'Erro ao extrair locale da URL:',
            err
          );
        }
      }
    }

    console.log(
      'locale do request antes do tratamento:',
      locale
    );

    if (!locale) {
      const reqHeaders = await headers();
      const acceptLanguage =
        reqHeaders.get('accept-language') || '';
      console.log(
        'accept-language header:',
        acceptLanguage
      );

      const preferred = parseAcceptLanguage(acceptLanguage);
      console.log(
        'preferred language from header:',
        preferred
      );

      if (preferred.toLowerCase().includes('pt')) {
        locale = 'pt';
      } else if (preferred.toLowerCase().includes('en')) {
        locale = 'en';
      } else {
        locale = routing.defaultLocale;
      }
    }

    if (
      locale !== 'en' &&
      locale !== 'pt' &&
      locale !== 'es'
    ) {
      locale = routing.defaultLocale;
    }
    console.log(
      'locale do request após tratamento:',
      locale
    );

    const messages = (
      await (locale === 'pt'
        ? import('../../messages/pt.json')
        : locale === 'es'
          ? import('../../messages/es.json')
          : import('../../messages/en.json'))
    ).default;

    return {
      locale,
      messages,
    };
  }
);
