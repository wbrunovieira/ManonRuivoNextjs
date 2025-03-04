'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaUserCircle,
  FaArrowRight,
  FaHeart,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const t = useTranslations('about');
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Animação do container principal (fade in & slide up)
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animação da imagem (zoom in)
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 px-6 bg-gradient-to-br from-white to-gray-100"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 my-4">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1600 57"
        >
          <defs>
            <linearGradient
              id="waveGradientTop"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#D8C8E6" />
              <stop offset="100%" stopColor="#7A6AA5" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradientTop)"
            d="M-48,57c72.4-0.3,183.7-6,309.1-29.3
              c252.2-47.7,447.2-2.1,658.2,16.4
              c225.6,19.5,471-38,641.9-72.2
              c35.2-7.4,65.9-13.2,89.8-16.6v61H-48z"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-8">
        <div
          ref={imageRef}
          className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/ManonAbout.jpeg"
            alt="Manon Ruivo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-6">
          <header className="flex items-center gap-3">
            <FaUserCircle className="text-5xl text-lilac-dark" />
            <h2 className="text-4xl font-extrabold text-lilac-dark">
              {t('title')}
            </h2>
          </header>

          <div className="flex flex-col text-lg text-gray-700 leading-relaxed gap-2">
            <p>
              {t('paragraph1')}
              <FaArrowRight className="inline-block mx-1 text-lilac-dark" />
              {t('paragraph2')}
            </p>
            <p>{t('paragraph3')}</p>
            <p>{t('paragraph4')}</p>
            <p className="font-semibold text-lilac-dark">
              {t('paragraph5')}{' '}
              <FaHeart className="inline-block ml-2 text-red-500" />
            </p>
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-green text-white rounded-full hover:bg-lilac transition-colors">
              {t('scheduleButton')}
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full overflow-hidden leading-[0] rotate-180 my-16">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1600 57"
        >
          <defs>
            <linearGradient
              id="waveGradientTop"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#D8C8E6" />
              <stop offset="100%" stopColor="#7A6AA5" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradientTop)"
            d="M-48,57c72.4-0.3,183.7-6,309.1-29.3
              c252.2-47.7,447.2-2.1,658.2,16.4
              c225.6,19.5,471-38,641.9-72.2
              c35.2-7.4,65.9-13.2,89.8-16.6v61H-48z"
          />
        </svg>
      </div>
    </section>
  );
}
