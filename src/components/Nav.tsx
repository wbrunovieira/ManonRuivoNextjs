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

export default function Nav() {
  const t = useTranslations('Nav');
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const [, setCurrentPostId] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const postId =
        window.sessionStorage.getItem('currentPostId');
      setCurrentPostId(postId);
      console.log('postId recuperado:', postId);
    }
  }, []);

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

      const isBlogDetail =
        segments.includes('blog') && segments.length > 3;
      console.log(
        '[handleLanguageChange] É página de blog detail?',
        isBlogDetail
      );

      const storedPostId =
        window.sessionStorage.getItem('currentPostId');
      if (isBlogDetail && storedPostId) {
        console.log(
          '[handleLanguageChange] storedPostId disponível. Consultando getPostById...'
        );
        const post = await getPostById(storedPostId);
        console.log(
          '[handleLanguageChange] Post retornado:',
          post
        );
        if (post) {
          const localizedSlug = post.slug?.[lang] || '';
          console.log(
            '[handleLanguageChange] localizedSlug para',
            lang,
            ':',
            localizedSlug
          );
          segments[1] = lang;
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
            storedPostId,
            'no idioma',
            lang
          );
        }
      } else if (isBlogDetail) {
        console.error(
          '[handleLanguageChange] storedPostId está indefinido para página de blog detail.'
        );
      }

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
      path: 'blog',
      label: t('blog', { defaultMessage: 'blog' }),
    },
    {
      path: 'neuroscience',
      label: t('neuroscience', {
        defaultMessage: 'neuroscience',
      }),
    },
    {
      path: 'sessions',
      label: t('sessions', { defaultMessage: 'sessions' }),
    },
    {
      path: 'training',
      label: t('training', { defaultMessage: 'training' }),
    },
    {
      path: 'testimonial',
      label: t('testimonial', {
        defaultMessage: 'testimonial',
      }),
    },
    {
      path: 'about',
      label: t('about', { defaultMessage: 'About' }),
    },
    {
      path: 'contact',
      label: t('contact', { defaultMessage: 'Contact' }),
    },
  ];

  const isHome =
    pathname === `/${locale}` || pathname === `/${locale}/`;

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: string
  ) => {
    if (isHome) {
      e.preventDefault();

      window.history.pushState(
        null,
        '',
        `/${locale}/#${section}`
      );
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/${locale}/#${section}`);
    }
    setIsMobileMenuOpen(false);
  };

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
            {menuItems.map((item, index) => {
              if (
                item.path === '' ||
                item.path === 'blog'
              ) {
                return (
                  <li
                    key={item.path}
                    ref={el => {
                      if (el)
                        menuItemsRef.current[index] = el;
                    }}
                  >
                    <Link
                      href={`/${locale}/${item.path}`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                    >
                      <span className="text-sm font-medium hover:text-lilac-dark transition-colors duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li
                    key={item.path}
                    ref={el => {
                      if (el)
                        menuItemsRef.current[index] = el;
                    }}
                  >
                    <Link
                      href={
                        isHome
                          ? `#${item.path}`
                          : `/${locale}/#${item.path}`
                      }
                      onClick={e =>
                        handleSectionClick(e, item.path)
                      }
                    >
                      <span className="text-sm font-medium hover:text-lilac-dark transition-colors duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              }
            })}
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
                  className={`flex items-center gap-1 px-1 py-1 rounded-md ${
                    selectedLocale === lang
                      ? 'bg-green text-white'
                      : 'bg-transparent text-foregroundBlack'
                  } hover:bg-green-light transition-all duration-300`}
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
              isOpen={isMobileMenuOpen}
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
            {menuItems.map(item => {
              if (
                item.path === '' ||
                item.path === 'blog'
              ) {
                return (
                  <li key={item.path}>
                    <Link
                      href={`/${locale}/${item.path}`}
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                    >
                      <span className="text-lg font-medium text-white hover:text-lilac hover:scale-105 transitions duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={item.path}>
                    <Link
                      href={
                        isHome
                          ? `#${item.path}`
                          : `/${locale}/#${item.path}`
                      }
                      onClick={e =>
                        handleSectionClick(e, item.path)
                      }
                    >
                      <span className="text-lg font-medium text-white hover:text-lilac hover:scale-105 transitions duration-300">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
