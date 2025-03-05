'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdSpa, MdClose } from 'react-icons/md';
import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function IndividualSection() {
  // Hooks do Next-Intl para pegar as traduções
  const t = useTranslations('individualSection');

  // Refs para animações GSAP
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const subtitle2Ref = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listItemsRef = useRef<HTMLLIElement[]>([]);

  // Função para armazenar as refs dos itens de lista
  const addToListRefs = (el: HTMLLIElement | null) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  // Animações GSAP com ScrollTrigger
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%', // Inicia quando 80% da tela atinge o topo do elemento
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
          y: 30,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .from(
        subtitle2Ref.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.8'
      )
      .from(
        contentRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.8'
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
        '-=0.5'
      )
      // Itens são riscados após um breve delay, indicando superação
      .to(
        listItemsRef.current,
        {
          textDecoration: 'line-through',
          color: '#888',
          stagger: 0.2,
        },
        '+=0.5'
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#7A6AA5] to-[#9B8ACA] text-white py-12 px-6 overflow-hidden mt-16"
      id="sessions"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 mt-16">
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
            d="M-48,57c72.4-0.3,183.7-6,309.1-29.3c252.2-47.7,447.2-2.1,658.2,16.4
            c225.6,19.5,471-38,641.9-72.2c35.2-7.4,65.9-13.2,89.8-16.6v61H-48z"
          />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center z-10 mt-32">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-extrabold text-center flex items-center gap-2"
        >
          <MdSpa size={32} />
          {t('title')}
        </h2>
        <p className="mb-4 text-lilac-light">
          {t('subtitle1')}
        </p>

        <p
          ref={subtitleRef}
          className="text-center text-lg md:text-xl max-w-2xl mb-8"
        >
          {t('subtitle2')}
        </p>
        <p
          ref={subtitle2Ref}
          className="text-center text-lg md:text-xl max-w-2xl mb-8"
        >
          {t('subtitle3')}
        </p>

        <div
          ref={contentRef}
          className="bg-white/90 text-lilac-dark rounded-lg shadow-lg p-6 md:p-8 w-full max-w-3xl"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            {t('introTitle')}
          </h3>
          <p className="mb-6 leading-relaxed">
            {t('introText1')}
          </p>
          <p className="mb-6 leading-relaxed">
            {t('introText2')}
          </p>

          <h4 className="text-lg md:text-xl font-semibold mb-3">
            {t('listTitle')}
          </h4>
          <ul className="list-none pl-0 space-y-3 text-lg">
            <li
              ref={addToListRefs}
              className="flex items-center gap-2"
            >
              <MdClose className="text-red-500" size={24} />
              {t('listItems.item1')}
            </li>
            <li
              ref={addToListRefs}
              className="flex items-center gap-2"
            >
              <MdClose className="text-red-500" size={24} />
              {t('listItems.item2')}
            </li>
            <li
              ref={addToListRefs}
              className="flex items-center gap-2"
            >
              <MdClose className="text-red-500" size={24} />
              {t('listItems.item3')}
            </li>
            <li
              ref={addToListRefs}
              className="flex items-center gap-2"
            >
              <MdClose className="text-red-500" size={24} />
              {t('listItems.item4')}
            </li>
          </ul>

          <div className="text-center mt-8">
            <a
              href="https://api.whatsapp.com/send?phone=13852771582"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-colors text-lg shadow-lg"
            >
              {t('button')}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] mb-16">
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
            c252.2,47.7,447.2,2.1,658.2-16.4c225.6-19.5,471,38,641.9,72.2
            c35.2,7.4,65.9,13.2,89.8,16.6V0H-48z"
          />
        </svg>
      </div>
    </section>
  );
}
