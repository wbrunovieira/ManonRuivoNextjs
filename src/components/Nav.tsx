'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import React, { useState, useRef, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
import Checkbox from './CheckBox';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MenuMobile from './MenuMobile';
import { getPostById } from '@/sanity/lib/client';
import { useCurrentPost } from '@/context/CurrentPostContext';

export default function Nav() {
  const { currentPostId: contextPostId } = useCurrentPost();
  const [currentPostId, setCurrentPostId] = useState<
    string | undefined
  >(contextPostId);

  // Tenta ler o valor do sessionStorage se o context não tiver o id
  useEffect(() => {
    if (!currentPostId && typeof window !== 'undefined') {
      const savedId =
        window.sessionStorage.getItem('currentPostId');
      if (savedId) {
        setCurrentPostId(savedId);
        console.log(
          '[Nav] Recuperou currentPostId do sessionStorage:',
          savedId
        );
      }
    }
  }, [currentPostId]);

  console.log('[Nav] currentPostId used:', currentPostId);

  const t = useTranslations('Nav');
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const [selectedLocale, setSelectedLocale] = useState<
    'en' | 'pt' | 'es'
  >(locale as 'en' | 'pt' | 'es');
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const handleLanguageChange = async (
    lang: 'en' | 'pt' | 'es'
  ) => {
    if (selectedLocale !== lang) {
      setSelectedLocale(lang);
      const segments = pathname.split('/');
      console.log(
        '[handleLanguageChange] pathname atual:',
        pathname
      );
      console.log(
        '[handleLanguageChange] segments iniciais:',
        segments
      );

      // Verifica se é página de detalhe de blog
      const isBlogDetail =
        segments.includes('blog') && segments.length > 3;
      console.log(
        '[handleLanguageChange] É página de blog detail?',
        isBlogDetail
      );

      if (isBlogDetail && currentPostId) {
        console.log(
          '[handleLanguageChange] currentPostId disponível. Consultando getPostById...'
        );
        const post = await getPostById(currentPostId);
        console.log(
          '[handleLanguageChange] Post retornado:',
          post
        );
        if (post) {
          // Obtenha o slug localizado para o idioma selecionado
          const localizedSlug = post.slug?.[lang] || '';
          console.log(
            '[handleLanguageChange] localizedSlug para',
            lang,
            ':',
            localizedSlug
          );
          segments[1] = lang;
          // Assume que o slug está na posição imediatamente após "blog"
          segments[segments.indexOf('blog') + 1] =
            localizedSlug;
          const newPath = segments.join('/');
          console.log(
            '[handleLanguageChange] Nova rota construída:',
            newPath
          );
          router.push(newPath);
          return;
        } else {
          console.error(
            '[handleLanguageChange] Post não encontrado para o _id:',
            currentPostId,
            'no idioma',
            lang
          );
        }
      } else {
        if (isBlogDetail) {
          console.error(
            '[handleLanguageChange] currentPostId está indefinido para página de blog detail.'
          );
        }
      }

      // Caso não seja página de detalhe ou currentPostId não esteja definido, altera apenas o locale
      segments[1] = lang;
      const newPath = segments.join('/') || `/${lang}`;
      console.log(
        '[handleLanguageChange] Nova rota para páginas não-detalhe:',
        newPath
      );
      router.push(newPath);
    }
  };

  const countryMapping: Record<'en' | 'pt' | 'es', string> =
    {
      en: 'US',
      pt: 'BR',
      es: 'ES',
    };

  const navRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const langButtonsRef = useRef<
    (HTMLButtonElement | null)[]
  >([]);
  const mobileMenuRef = useRef<HTMLUListElement | null>(
    null
  );

  const menuItems = [
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
      label: t('contact', { defaultMessage: 'Contact' }),
    },
    {
      path: 'blog',
      label: t('blog', { defaultMessage: 'blog' }),
    },
  ];

  useGSAP(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(navRef.current, { opacity: 1 });
      },
    });

    gsap.from(menuItemsRef.current, {
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(menuItemsRef.current, { opacity: 1 });
      },
    });

    gsap.from(langButtonsRef.current, {
      opacity: 0,
      x: 30,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(langButtonsRef.current, { opacity: 1 });
      },
    });
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.from(mobileMenuRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full p-4 border-b border-lilac-light bg-backgroundWhite text-foregroundBlack shadow-md z-50"
    >
      <div className="flex container mx-auto justify-between items-center">
        <div className="text-xl font-bold text-lilac-dark">
          Manon Ruivo
        </div>
        <div className="hidden md:block z-50">
          <ul className="flex gap-6 list-none p-0">
            {menuItems.map((item, index) => (
              <li
                key={item.path}
                ref={el => {
                  if (el) menuItemsRef.current[index] = el;
                }}
              >
                <Link href={`/${locale}/${item.path}`}>
                  <span className="text-lg font-medium hover:text-lilac-dark transition-colors duration-300">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:mr-4">
          <div className="flex">
            {(['en', 'pt', 'es'] as const).map(
              (lang, index) => (
                <button
                  key={lang}
                  ref={el => {
                    if (el)
                      langButtonsRef.current[index] = el;
                  }}
                  onClick={() => handleLanguageChange(lang)}
                  className={`flex items-center gap-1 px-1 py-1 rounded-md ${selectedLocale === lang ? 'bg-green text-white' : 'bg-transparent text-foregroundBlack'} hover:bg-green-light transition-all duration-300`}
                >
                  <Checkbox
                    checked={selectedLocale === lang}
                    onChange={() =>
                      handleLanguageChange(lang)
                    }
                  />
                  <ReactCountryFlag
                    countryCode={countryMapping[lang]}
                    svg
                    className="text-lg"
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
          <div className="md:hidden ml-12 z-50">
            <MenuMobile
              onToggle={(checked: boolean) =>
                setIsMobileMenuOpen(checked)
              }
            />
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden top-full right-0 mt-2 p-8 rounded bg-lilac-dark z-50">
          <ul
            ref={mobileMenuRef}
            className="flex flex-col gap-4 list-none p-0 text-right bg-lilac-dark z-50"
          >
            {menuItems.map(item => (
              <li key={item.path}>
                <Link href={`/${locale}/${item.path}`}>
                  <span className="text-lg font-medium text-white hover:text-lilac hover:scale-105 transitions duration-300">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
