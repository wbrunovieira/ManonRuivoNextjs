'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  MdAccessibility,
  MdHealing,
  MdCheckCircle,
} from 'react-icons/md';
import { useTranslations } from 'next-intl';

export default function AccessBar() {
  const t = useTranslations('accessBar');

  const title = t('title');
  const descriptionLine1 = t('description.line1');
  const descriptionLine2 = t('description.line2');
  const descriptionLine3 = t('description.line3');

  const benefitsTitle = t('benefits.title');
  const benefit1 = t('benefits.item1');
  const benefit2 = t('benefits.item2');
  const benefit3 = t('benefits.item3');

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const benefitsRef = useRef(null);
  const listItemsRef = useRef<HTMLElement[]>([]);

  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);
  const lineRef = useRef(null);

  const addToListRefs = (el: HTMLElement | null) => {
    if (el && !listItemsRef.current.includes(el)) {
      listItemsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
    });

    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1,
      ease: 'power2.out',
    });

    gsap.from(benefitsRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.5,
      ease: 'power2.out',
    });

    gsap.from(listItemsRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.8,
      delay: 2,
      ease: 'power2.out',
      stagger: 0.2,
    });

    gsap.from(circleRef1.current, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'back.out(1.7)',
      delay: 0.5,
    });

    gsap.from(circleRef2.current, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'back.out(1.7)',
      delay: 0.7,
    });

    gsap.from(lineRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 1,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        mt-16 relative py-4 px-6 flex flex-col items-center justify-center
        text-center bg-gradient-to-r from-[#7A6AA5] to-[#9B8ACA]
      "
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={circleRef1}
          className="absolute top-10 left-10 w-20 h-40 bg-white opacity-20 rounded-full blur-xl"
        ></div>
        <div
          ref={circleRef2}
          className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl p-8">
        <h2
          ref={titleRef}
          className="text-2xl md:text-5xl font-bold text-white flex items-center justify-center gap-2 mt-8 p-8"
        >
          <MdAccessibility
            className="text-white "
            size={32}
          />
          {title}
        </h2>

        <div
          ref={descriptionRef}
          className="mt-4 text-lg text-white max-w-2xl mx-auto space-y-4"
        >
          <p>{descriptionLine1}</p>
          <p>{descriptionLine2}</p>
          <p>{descriptionLine3}</p>
        </div>

        <h3
          ref={benefitsRef}
          className="text-xl md:text-2xl font-semibold mb-4 p-8 text-white flex items-center justify-center gap-2"
        >
          <MdHealing className="text-white" size={32} />
          {benefitsTitle}
        </h3>

        <div className="bg-white/90 p-4 rounded-lg shadow-md mt-4">
          <ul className="flex flex-col items-start justify-center text-lg text-lilac-dark list-none space-y-4">
            <li
              ref={addToListRefs}
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <MdCheckCircle
                className="text-green-500"
                size={20}
              />
              {benefit1}
            </li>
            <li
              ref={addToListRefs}
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <MdCheckCircle
                className="text-green-500"
                size={20}
              />
              {benefit2}
            </li>
            <li
              ref={addToListRefs}
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <MdCheckCircle
                className="text-green-500"
                size={20}
              />
              {benefit3}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
