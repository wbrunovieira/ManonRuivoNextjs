// src/components/Nav.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function Nav() {
  const t = useTranslations('Nav');
  const router = useRouter();
  const locale = useLocale();

  const changeLocale = (newLocale: string) => {
    // Redireciona para a raiz do novo idioma
    router.push(`/${newLocale}`);
  };

  return (
    <nav
      style={{
        padding: '1rem',
        borderBottom: '1px solid #ccc',
      }}
    >
      <ul
        style={{
          display: 'flex',
          gap: '1rem',
          listStyle: 'none',
          padding: 0,
        }}
      >
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
      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => changeLocale('en')}
          style={{ marginRight: '0.5rem' }}
        >
          English
        </button>
        <button
          onClick={() => changeLocale('pt')}
          style={{ marginRight: '0.5rem' }}
        >
          Português
        </button>
        <button onClick={() => changeLocale('es')}>
          Español
        </button>
      </div>
    </nav>
  );
}
