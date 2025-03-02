'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdWork } from 'react-icons/md';
import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function CorporateSection() {
  const t = useTranslations('corporateSection');

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listItemsRef = useRef<HTMLLIElement[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const addToListRefs = (el: HTMLLIElement | null) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    tl.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    })
      .from(
        titleRef.current,
        {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .from(
        paragraphRef.current,
        {
          opacity: 0,
          x: 50,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .from(
        listRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .from(
        listItemsRef.current,
        {
          opacity: 0,
          x: -20,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
        },
        '-=0.8'
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: 'back.out(1.7)',
        },
        '-=0.5'
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#7A6AA5] to-[#9B8ACA] text-white py-12 px-6 overflow-hidden mt-16"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
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

      <div className="relative max-w-5xl mx-auto flex flex-col items-center z-10 mt-16">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-extrabold text-center flex items-center gap-2"
        >
          <MdWork size={32} />
          {t('title')}
        </h2>

        <p
          ref={paragraphRef}
          className="text-center text-lg md:text-xl max-w-3xl mt-4 mb-8"
        >
          {t('paragraph')}
        </p>

        <ul
          ref={listRef}
          className="bg-white/90 text-lilac-dark rounded-lg shadow-lg p-6 md:p-8 w-full max-w-3xl space-y-4"
        >
          <li
            ref={addToListRefs}
            className="text-lg md:text-xl leading-relaxed"
          >
            {t('list.item1')}
          </li>
          <li
            ref={addToListRefs}
            className="text-lg md:text-xl leading-relaxed"
          >
            {t('list.item2')}
          </li>
          <li
            ref={addToListRefs}
            className="text-lg md:text-xl leading-relaxed"
          >
            {t('list.item3')}
          </li>
          <li
            ref={addToListRefs}
            className="text-lg md:text-xl leading-relaxed"
          >
            {t('list.item4')}
          </li>
        </ul>

        <a
          ref={ctaRef}
          href="#agendamento-corporativo"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-transform text-lg shadow-lg mt-8 mb-8"
        >
          {t('button')}
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1600 57"
        >
          <defs>
            <linearGradient
              id="waveGradientBottom"
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
            fill="url(#waveGradientBottom)"
            d="M-48,0c72.4,0.3,183.7,6,309.1,29.3
              c252.2,47.7,447.2,2.1,658.2-16.4
              c225.6-19.5,471,38,641.9,72.2
              c35.2,7.4,65.9,13.2,89.8,16.6V0H-48z"
          />
        </svg>
      </div>
    </section>
  );
}
