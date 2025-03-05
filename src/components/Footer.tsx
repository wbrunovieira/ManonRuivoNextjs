'use client';

import React from 'react';
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
import { useTranslations } from 'next-intl';

interface SocialMediaLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  label,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="bg-lilac-light hover:bg-lilac-dark text-foregroundBlack p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lilac-dark focus:ring-offset-2"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  return (
    <footer className="bg-backgroundWhite dark:bg-backgroundDark text-foregroundBlack dark:text-foregroundWhite relative py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Homepage"
                title="Homepage"
                className="text-xl font-bold text-lilac-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lilac-dark focus:ring-offset-2"
              >
                Manon Ruivo
              </a>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <SocialMediaLink
              href="https://www.facebook.com/profile.php?id=100059025270728"
              label="Facebook"
            >
              <FaFacebookF size={20} />
            </SocialMediaLink>
            <SocialMediaLink
              href="https://www.instagram.com/manonruivo/"
              label="Instagram"
            >
              <FaInstagram size={20} />
            </SocialMediaLink>
            <SocialMediaLink
              href="https://api.whatsapp.com/send?phone=13852771582"
              label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </SocialMediaLink>
          </div>
        </div>

        <div className="mt-8">
          <hr
            className="border-t-2 border-lilac-light"
            aria-hidden="true"
          />
        </div>

        <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">{t('allrights')}</p>
          <p className="text-sm flex items-center">
            {t('dev')}{' '}
            <a
              href="#"
              aria-label="WB Digital Solutions"
              title="WB Digital Solutions"
              className="text-lilac hover:text-lilac-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lilac-dark focus:ring-offset-2 ml-1"
            >
              WB Digital Solutions
            </a>
          </p>
        </div>

        <div className="mt-4 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-lilac rounded-full"></div>
          <div className="w-3 h-3 bg-lilac rounded-full"></div>
          <div className="w-3 h-3 bg-lilac rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
