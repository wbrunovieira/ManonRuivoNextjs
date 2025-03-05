import { getTranslations } from 'next-intl/server';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
} from 'next-intl';
import type { Metadata } from 'next';
import '../../app/globals.css';

import { Raleway, Lato } from 'next/font/google';
import { normalizeLocale } from '@/lib/normalizelocale';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: 'meta',
  });

  const baseUrl = 'https://www.manonruivo.com';
  const canonicalUrl =
    locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt`,
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      siteName: 'Manon Ruivo',
      locale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      site: '@manonruivo',
      creator: '@manonruivo',
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

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
  params: { locale: string };
}) {
  const { locale } = props.params;
  const normalizedLocale = normalizeLocale(locale);

  const messagesModule = await (normalizedLocale === 'pt'
    ? import('../../../messages/pt.json')
    : normalizedLocale === 'es'
      ? import('../../../messages/es.json')
      : import('../../../messages/en.json'));

  const messages: AbstractIntlMessages =
    messagesModule.default;

  return (
    <html
      lang={normalizedLocale}
      className={`${lato.className} ${raleway.className}`}
    >
      <body>
        <NextIntlClientProvider
          key={normalizedLocale}
          locale={normalizedLocale}
          messages={messages}
        >
          <Nav />
          {props.children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
