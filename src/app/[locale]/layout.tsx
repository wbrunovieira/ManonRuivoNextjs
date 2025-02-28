// src/app/[locale]/layout.tsx
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
} from 'next-intl';
import type { Metadata } from 'next';
import '../../app/globals.css';

import { Raleway, Lato } from 'next/font/google';
import { normalizeLocale } from '@/lib/normalizelocale';

export const metadata: Metadata = {
  title: 'Manon Ruivo',
  description: '',
};

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'pt' },
    { locale: 'es' },
  ];
}

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default async function RootLocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await props.params;
  const locale = normalizeLocale(resolvedParams.locale);

  const messagesModule = await (locale === 'pt'
    ? import('../../../messages/pt.json')
    : locale === 'es'
      ? import('../../../messages/es.json')
      : import('../../../messages/en.json'));

  const messages: AbstractIntlMessages =
    messagesModule.default as AbstractIntlMessages;

  return (
    <html
      lang={locale}
      className={`${lato.className} ${raleway.className}`}
    >
      <body>
        <NextIntlClientProvider
          key={locale}
          locale={locale}
          messages={messages}
        >
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
