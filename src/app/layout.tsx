// src/app/layout.tsx
import { CurrentPostProvider } from '@/context/CurrentPostContext';
import './globals.css';
import type { Metadata } from 'next';
import { Merriweather, Work_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Manon Ruivo',
  description: '',
};

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-work-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPostId =
    typeof window !== 'undefined'
      ? (window.sessionStorage.getItem('currentPostId') ??
        undefined)
      : undefined;

  return (
    <html
      className={`${merriweather.variable} ${workSans.variable}`}
    >
      <CurrentPostProvider currentPostId={currentPostId}>
        <head>
          <title>Manon Ruivo</title>
        </head>
        <body>{children}</body>
      </CurrentPostProvider>
    </html>
  );
}
