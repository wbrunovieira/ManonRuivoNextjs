'use client';

import { useTranslations } from 'next-intl';

import {
  FaPhone,
  FaWhatsapp,
  FaCommentAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaExternalLinkAlt,
} from 'react-icons/fa';

export default function CTASection() {
  const t = useTranslations('cta');

  const Divider = () => (
    <div className="w-full max-w-xs my-4 border-t border-dashed border-gray-300" />
  );

  return (
    <section
      className="py-16 px-6 bg-lilac-dark text-white"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-4xl font-bold">
            {t('title')}
          </h2>
          <p className="text-xl">{t('copy1')}</p>
          <p className="text-xl">{t('copy2')}</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 mt-8">
          <Divider />
        </div>

        <div className="flex flex-col justify-center items-center gap-8 mt-8">
          <div className="w-full max-w-xs text-left">
            <div className="flex items-center gap-2">
              <FaPhone className="text-2xl" />
              <a
                href="tel:+13852771582"
                className="hover:underline"
              >
                <p>{t('phone')}: +1 (385) 277-1582</p>
              </a>
            </div>
          </div>

          <div className="w-full max-w-xs text-left">
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-2xl" />
              <a
                href="https://wa.me/13852771582"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <p>{t('whatsapp')}: +1 (385) 277-1582</p>
              </a>
            </div>
          </div>

          <div className="w-full max-w-xs text-left">
            <div className="flex items-center gap-2">
              <FaCommentAlt className="text-2xl" />
              <a
                href="sms:+13852771582"
                className="hover:underline"
              >
                <p>SMS: +1 (385) 277-1582</p>
              </a>
            </div>
          </div>

          <div className="w-full max-w-xs text-left">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-2xl" />
              <div>
                <p className="font-bold underline">
                  {t('address')}:
                </p>
                <p className="max-w-xs">
                  Lincoln Square, 766 S 400 E, Suite 207 2nd
                  floor - Orem - Utah
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 mt-8">
          <Divider />
        </div>

        <div className="flex justify-center items-center gap-8 mt-8">
          <a
            href="https://www.instagram.com/manonruivo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100059025270728"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaFacebookF className="text-3xl" />
          </a>
          <a
            href="mailto:manonrr@yahoo.com.br"
            className="hover:text-gray-300"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>

        <div className="mt-8">
          <a
            href="https://www.accessconsciousness.com/en/public-profiles/manon-ruivo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-medium hover:underline hover:text-gray-300"
          >
            {t('accessProfile')}{' '}
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
