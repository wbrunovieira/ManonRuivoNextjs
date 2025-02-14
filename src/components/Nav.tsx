// src/components/Nav.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import Checkbox from './CheckBox';

export default function Nav() {
  const t = useTranslations('Nav');
  const router = useRouter();
  const locale = useLocale();

  const [selectedLocale, setSelectedLocale] = useState<
    'en' | 'pt' | 'es'
  >(locale as 'en' | 'pt' | 'es');

  const handleLanguageChange = (
    lang: 'en' | 'pt' | 'es'
  ) => {
    if (selectedLocale !== lang) {
      setSelectedLocale(lang);
      router.push(`/${lang}`);
    }
  };

  const countryMapping: Record<'en' | 'pt' | 'es', string> =
    {
      en: 'US',
      pt: 'BR',
      es: 'ES',
    };

  return (
    <nav className="p-4 border-b border-lilac-light bg-background  text-foreground flex justify-between items-center">
      <ul className="flex gap-4 list-none p-0">
        <li>
          <Link href={`/${locale}`}>
            <span className="hover:text-lilac-dark transition-colors">
              {t('home', { defaultMessage: 'Home' })}
            </span>
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/about`}>
            <span className="hover:text-lilac-dark transition-colors">
              {t('about', { defaultMessage: 'About' })}
            </span>
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/contact`}>
            <span className="hover:text-lilac-dark transition-colors">
              {t('contact', { defaultMessage: 'Contact' })}
            </span>
          </Link>
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        {(['en', 'pt', 'es'] as const).map(lang => (
          <div
            key={lang}
            className="flex items-center gap-1 justify-center cursor-pointer"
            onClick={() => handleLanguageChange(lang)}
          >
            <Checkbox
              checked={selectedLocale === lang}
              onChange={() => handleLanguageChange(lang)}
            />
            <ReactCountryFlag
              countryCode={countryMapping[lang]}
              svg
              style={{ fontSize: '1em', lineHeight: '1em' }}
              title={
                lang === 'en'
                  ? 'English'
                  : lang === 'pt'
                  ? 'Português'
                  : 'Español'
              }
            />
          </div>
        ))}
      </div>
    </nav>
  );
}
