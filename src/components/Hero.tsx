'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';
import { MdAccessibility } from 'react-icons/md';
import ImageSliderHero from './ImageSliderHero';

export default function Hero() {
  const t = useTranslations('hero');
  const [isMobile] = useState(false);
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
      if (isMobile) {
        const words =
          titleRef.current.querySelectorAll('.word');
        gsap.fromTo(
          words,
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
      y: 30,
      duration: 1,
      delay: 1,
      ease: 'power2.out',
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.5,
      ease: 'power2.out',
    });

    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 1.8,
      ease: 'back.out(1.7)',
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 2,
      ease: 'power2.out',
    });

    gsap.to(heroRef.current, {
      backgroundPosition: '200% center',
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative py-20 px-6 flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-r from-lilac-dark via-lilac-light to-lilac-dark text-white bg-[length:400%_400%]"
    >
      <div className="absolute inset-0" />

      <div className="max-w-lg z-10">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          {t('title1')} <br /> {t('title2')}
        </h1>

        <div
          ref={iconTitleRef}
          className="inline-flex items-center gap-2 bg-white/20 p-2 rounded text-white mt-4"
        >
          <MdAccessibility size={48} />
          <p className="text-4xl md:text-5xl font-bold">
            {t('access')}
          </p>
        </div>

        <p
          ref={subtitleRef}
          className="mt-4 text-lg text-white/80"
        >
          {t('description')}
        </p>

        <button
          ref={ctaRef}
          className="z-10 mt-8 px-6 py-3 bg-green hover:bg-green/30 text-white font-semibold rounded transition-colors duration-300"
        >
          {t('cta')}
        </button>
      </div>

      <div ref={imageRef} className=" md:mr-4 z-10">
        <ImageSliderHero />
      </div>
    </section>
  );
}
