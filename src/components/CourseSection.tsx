'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MdSchool } from 'react-icons/md';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function CourseSection() {
  const t = useTranslations('courseSection');

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const bulletListRef = useRef<HTMLUListElement>(null);
  const bulletItemsRef = useRef<HTMLLIElement[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const addToBulletRefs = (el: HTMLLIElement | null) => {
    if (el && !bulletItemsRef.current.includes(el)) {
      bulletItemsRef.current.push(el);
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
      duration: 1,
      ease: 'power2.out',
    })
      .from(
        headingRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .from(
        paragraphRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.8'
      )
      .from(
        bulletListRef.current,
        {
          opacity: 0,
          x: 30,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.8'
      )
      .from(
        bulletItemsRef.current,
        {
          opacity: 0,
          x: 20,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
        },
        '-=0.6'
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: 'back.out(1.7)',
        },
        '-=0.6'
      )
      .from(
        imageRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.8'
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 overflow-hidden mt-16"
    >
      <div className="absolute inset-0 w-1/3 md:w-1/2 bg-gradient-to-b from-lilac-dark to-lilac-light -skew-x-12 -left-1/3 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 md:pr-8 ml-32 md:ml-64">
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl font-extrabold text-lilac-dark mb-4 flex items-center gap-2 "
            >
              <MdSchool
                size={32}
                className="text-lilac-light"
              />
              {t('title')}
            </h2>

            <p
              ref={paragraphRef}
              className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
            >
              {t('intro1')}
            </p>
            <p
              ref={paragraphRef}
              className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
            >
              {t('intro2')}
            </p>

            <ul
              ref={bulletListRef}
              className="space-y-3 list-disc list-inside text-gray-700 text-lg mb-6"
            >
              <li ref={addToBulletRefs}>
                {t('bullets.item1')}
              </li>
              <li ref={addToBulletRefs}>
                {t('bullets.item2')}
              </li>
              <li ref={addToBulletRefs}>
                {t('bullets.item3')}
              </li>
              <li ref={addToBulletRefs}>
                {t('bullets.item4')}
              </li>
            </ul>

            <a
              ref={ctaRef}
              href="#inscricao-formacao"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-transform text-lg shadow-lg"
            >
              {t('button')}
            </a>
          </div>

          <div
            ref={imageRef}
            className="flex-1 flex justify-center items-center"
          >
            <div className="rounded-lg shadow-md flex items-center justify-center">
              <Image
                src="/images/group-image.jpg"
                alt="Access Bars®"
                width={400}
                height={400}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
