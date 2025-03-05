'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaExternalLinkAlt,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const t = useTranslations('cta');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const Divider = () => (
    <div className="w-full max-w-xs my-4 border-t border-dashed border-gray-300" />
  );

  return (
    <section
      ref={containerRef}
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
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://facebook.com"
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
