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
    <nav className="p-4 border-b border-gray-300 flex justify-between items-center">
      <ul className="flex gap-4 list-none p-0">
        <li>
          <Link href={`/${locale}`}>
            {t('home', { defaultMessage: 'Home' })}
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/about`}>
            {t('about', { defaultMessage: 'About' })}
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/contact`}>
            {t('contact', { defaultMessage: 'Contact' })}
          </Link>
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <div
          className="flex items-center gap-1 justify-center cursor-pointer"
          onClick={() => handleLanguageChange('en')}
        >
          <Checkbox
            checked={selectedLocale === 'en'}
            onChange={() => handleLanguageChange('en')}
          />
          <ReactCountryFlag
            countryCode={countryMapping.en}
            svg
            style={{ fontSize: '1em', lineHeight: '1em' }}
            title="English"
          />
        </div>
        <div
          className="flex items-center gap-1 justify-center cursor-pointer"
          onClick={() => handleLanguageChange('pt')}
        >
          <Checkbox
            checked={selectedLocale === 'pt'}
            onChange={() => handleLanguageChange('pt')}
          />
          <ReactCountryFlag
            countryCode={countryMapping.pt}
            svg
            style={{ fontSize: '1em', lineHeight: '1em' }}
            title="Português"
          />
        </div>
        <div
          className="flex items-center gap-1 justify-center cursor-pointer"
          onClick={() => handleLanguageChange('es')}
        >
          <Checkbox
            checked={selectedLocale === 'es'}
            onChange={() => handleLanguageChange('es')}
          />
          <ReactCountryFlag
            countryCode={countryMapping.es}
            svg
            style={{ fontSize: '1em', lineHeight: '1em' }}
            title="Español"
          />
        </div>
      </div>
    </nav>
  );
}
