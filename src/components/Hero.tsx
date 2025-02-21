// src/components/Hero.tsx
'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';
import { MdAccessibility } from 'react-icons/md';
import ImageSliderHero from './ImageSliderHero';

export default function Hero() {
  const t = useTranslations('hero');

  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const iconTitleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(
    null
  );
  const ctaRef = useRef<HTMLButtonElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    if (titleRef.current) {
      if (window.innerWidth < 768) {
        const lines =
          titleRef.current.querySelectorAll('.line');
        gsap.fromTo(
          lines,
          { scale: 2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.1,
            delay: 0.5,
          }
        );
      } else {
        const rect =
          titleRef.current.getBoundingClientRect();
        const dx =
          window.innerWidth / 2 -
          (rect.left + rect.width / 2);
        const dy =
          window.innerHeight / 2 -
          (rect.top + rect.height / 2);

        gsap.set(titleRef.current, {
          scale: 2,
          x: dx,
          y: dy,
        });
        gsap.to(titleRef.current, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 1,
        });
      }
    }

    gsap.from(iconTitleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 2.2,
      ease: 'power2.out',
    });
    gsap.to(iconTitleRef.current, {
      scale: 1.1,
      duration: 0.3,
      delay: 3.2,
      ease: 'power2.out',
      onComplete: () => {
        void gsap.to(iconTitleRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      },
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 3.5,
      ease: 'power2.out',
    });

    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 3.7,
      ease: 'back.out(1.7)',
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 3.9,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-backgroundWhite text-foregroundBlack py-16 px-4 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="max-w-lg">
        <h1
          ref={titleRef}
          className="text-xl md:text-3xl font-bold text-lilac"
        >
          <span className="line">{t('title1')}</span>
          <span className="line">{t('title2')}</span>
        </h1>
        <div
          ref={iconTitleRef}
          className="inline-flex items-center gap-2 bg-lilac-light p-2 rounded text-white mt-4"
        >
          <MdAccessibility size={48} color="#9B8ACA" />
          <p className="text-4xl md:text-5xl font-bold">
            {t('access')}
          </p>
        </div>
        <p
          ref={subtitleRef}
          className="mt-4 text-lg text-lilac"
        >
          {t('description')}
        </p>
        <button
          ref={ctaRef}
          className="mt-8 px-6 py-3 bg-green hover:bg-green-dark text-white font-semibold rounded transition-colors duration-300"
        >
          {t('cta')}
        </button>
      </div>

      <div className="hidden md:block w-px h-64 bg-lilac-light mx-8" />

      <div ref={imageRef} className="mt-8 md:mr-32 ">
        <ImageSliderHero />
      </div>
    </section>
  );
}
