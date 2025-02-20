'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import React, { useState, useRef } from 'react';
import ReactCountryFlag from 'react-country-flag';
import Checkbox from './CheckBox';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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

  // Referências para animação GSAP
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const langButtonsRef = useRef<
    (HTMLButtonElement | null)[]
  >([]);

  // Hook de animação GSAP
  useGSAP(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        void gsap.set(navRef.current, { opacity: 1 });
      },
    });

    gsap.from(menuItemsRef.current, {
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        void gsap.set(menuItemsRef.current, { opacity: 1 });
      },
    });

    gsap.from(langButtonsRef.current, {
      opacity: 0,
      x: 30,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        void gsap.set(langButtonsRef.current, {
          opacity: 1,
        });
      },
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="p-4 border-b border-lilac-light bg-backgroundWhite text-foregroundBlack flex justify-between items-center shadow-md"
    >
      {/* Nome da profissional */}
      <div className="text-xl font-bold text-lilac-dark">
        Manon Ruivo
      </div>

      {/* Links de navegação */}
      <ul className="flex gap-6 list-none p-0">
        {[
          {
            path: '',
            label: t('home', { defaultMessage: 'Home' }),
          },
          {
            path: 'about',
            label: t('about', { defaultMessage: 'About' }),
          },
          {
            path: 'contact',
            label: t('contact', {
              defaultMessage: 'Contact',
            }),
          },
          {
            path: 'blog',
            label: t('blog', {
              defaultMessage: 'blog',
            }),
          },
        ].map(({ path, label }, index) => (
          <li
            key={path}
            ref={el => {
              if (el) menuItemsRef.current[index] = el;
            }}
          >
            <Link href={`/${locale}/${path}`}>
              <span className="text-lg font-medium hover:text-lilac-dark transition-colors duration-300">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Seletor de Idioma */}
      <div className="flex gap-4 items-center">
        {(['en', 'pt', 'es'] as const).map(
          (lang, index) => (
            <button
              key={lang}
              ref={el => {
                if (el) langButtonsRef.current[index] = el;
              }}
              onClick={() => handleLanguageChange(lang)}
              className={`flex items-center gap-2 px-3 py-1 rounded-md opacity-100 mr-4
    ${
      selectedLocale === lang
        ? 'bg-green text-white'
        : 'bg-transparent text-foregroundBlack'
    }
    hover:bg-green-light transition-all duration-300`}
            >
              <Checkbox
                checked={selectedLocale === lang}
                onChange={() => handleLanguageChange(lang)}
              />
              <ReactCountryFlag
                countryCode={countryMapping[lang]}
                svg
                className="text-xl"
                title={
                  lang === 'en'
                    ? 'English'
                    : lang === 'pt'
                    ? 'Português'
                    : 'Español'
                }
              />
            </button>
          )
        )}
      </div>
    </nav>
  );
}
