// src/app/[locale]/layout.tsx
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
} from 'next-intl';
import type { Metadata } from 'next';
import '../../app/globals.css';

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

export default async function RootLocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await props.params;
  const locale = resolvedParams.locale;

  const messagesModule = await (locale === 'pt'
    ? import('../../../messages/pt.json')
    : locale === 'es'
    ? import('../../../messages/es.json')
    : import('../../../messages/en.json'));

  const messages: AbstractIntlMessages =
    messagesModule.default as AbstractIntlMessages;

  return (
    <html lang={locale}>
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
