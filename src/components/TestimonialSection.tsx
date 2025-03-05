'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaPlay, FaRegSmile } from 'react-icons/fa';
import {
  testimonialSegmentsTatiana,
  testimonialSegmentsRenato,
  Language,
  TranscriptSegment,
} from '@/data/testimonialSegments';
import WrittenTestimonial from './WrittenTestimonial';

export default function TestimonialSection() {
  const t = useTranslations('testimonial');

  const videoRefTatiana = useRef<HTMLVideoElement | null>(
    null
  );
  const [activeSegmentTatiana, setActiveSegmentTatiana] =
    useState<number | null>(null);
  const [videoRefRenato, setVideoRefRenato] =
    useState<HTMLVideoElement | null>(null);
  const [activeSegmentRenato, setActiveSegmentRenato] =
    useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const videoRefMaria = useRef<HTMLVideoElement | null>(
    null
  );
  const [countdown, setCountdown] = useState<number>(100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  const language = t('lang') as Language;
  const segmentsTatiana =
    testimonialSegmentsTatiana[language] ||
    testimonialSegmentsTatiana['pt'];
  const segmentsRenato =
    testimonialSegmentsRenato[language] ||
    testimonialSegmentsRenato['pt'];

  const handleTimeUpdateTatiana = () => {
    if (!videoRefTatiana?.current) return;
    const currentTime = videoRefTatiana.current.currentTime;
    const currentSegmentIndex = segmentsTatiana.findIndex(
      (segment: TranscriptSegment) =>
        currentTime >= segment.start &&
        currentTime < segment.end
    );
    setActiveSegmentTatiana(currentSegmentIndex);
  };

  const handleTimeUpdateRenato = () => {
    if (!videoRefRenato) return;
    const currentTime = videoRefRenato.currentTime;
    const currentSegmentIndex = segmentsRenato.findIndex(
      (segment: TranscriptSegment) =>
        currentTime >= segment.start &&
        currentTime < segment.end
    );
    setActiveSegmentRenato(currentSegmentIndex);
  };

  const handleTimeUpdateMaria = () => {
    if (!videoRefMaria.current) return;
    const currentTime = videoRefMaria.current.currentTime;
    const duration = videoRefMaria.current.duration;

    const adjustedTime = Math.max(0, currentTime + 1);

    const newCountdown = Math.max(
      0,
      Math.round(100 - (adjustedTime / duration) * 100)
    );
    setCountdown(newCountdown);
  };

  const Divider = () => (
    <div className="my-12 flex justify-center">
      <div className="w-1/2 border-t-2 border-dashed border-lilac-dark" />
    </div>
  );

  return (
    <section
      className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-200"
      id="testimonial"
    >
      <div className="w-full overflow-hidden leading-[0] rotate-180 my-4">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1600 80"
        >
          <defs>
            <linearGradient
              id="waveGradientTopNew"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#E3D7F1" />
              <stop offset="100%" stopColor="#8E7BB7" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradientTopNew)"
            d="
        M0,40 
        C200,70 400,10 600,40 
        C800,70 1000,10 1200,40 
        C1400,70 1600,10 1600,40 
        L1600,80 
        L0,80 
        Z
      "
          />

          <circle cx="300" cy="30" r="5" fill="#D8C8E6" />
          <circle cx="1300" cy="50" r="8" fill="#7A6AA5" />
        </svg>
      </div>
      <div className="flex items-center justify-center mb-10">
        <FaRegSmile className="text-4xl text-lilac-dark mr-3" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-lilac-dark">
          {t('title')}
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="text-center mb-4">
            <p className="text-xl text-lilac-dark flex items-center justify-center gap-2">
              <FaPlay className="text-green-600" />{' '}
              {t('subtitleTatiana')}
            </p>
          </div>
          <div className="flex flex-col  md:flex-row items-center gap-6">
            <video
              ref={videoRefTatiana}
              src="/videos/ManonDepoimentTatiana_low.mp4"
              controls
              playsInline
              onTimeUpdate={handleTimeUpdateTatiana}
              className="w-1/3 md:w-1/4 rounded-lg shadow-lg"
            />
            <div className="space-y-3 mt-8">
              {isMobile ? (
                activeSegmentTatiana !== null &&
                activeSegmentTatiana >= 0 ? (
                  <p className="transition-colors duration-300 text-green-600 text-sm">
                    {
                      segmentsTatiana[activeSegmentTatiana]
                        .text
                    }
                  </p>
                ) : (
                  <p className="text-green italic ">
                    {t('showmetranscription')}
                  </p>
                )
              ) : (
                segmentsTatiana.map(
                  (
                    segment: TranscriptSegment,
                    index: number
                  ) => (
                    <div
                      key={index}
                      className={`flex md:ml-8 md:w-2/3 items-center transition-colors duration-300 ${
                        activeSegmentTatiana === index
                          ? 'text-green-600 text-xs'
                          : 'text-gray-700 text-xs'
                      }`}
                    >
                      {activeSegmentTatiana === index && (
                        <FaPlay className="mr-2" />
                      )}
                      <p>{segment.text}</p>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>

        <Divider />

        <div className="mb-12">
          <div className="text-center mb-4">
            <p className="text-xl text-lilac-dark flex items-center justify-center gap-2">
              <FaPlay className="text-green-600" />{' '}
              {t('subtitleRenato')}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <video
              ref={el => setVideoRefRenato(el)}
              src="/videos/ManonDepoimentRenato_low.mp4"
              controls
              playsInline
              onTimeUpdate={handleTimeUpdateRenato}
              className="w-1/3 md:w-1/4 rounded-lg shadow-lg"
            />
            <div className="space-y-3 mt-8">
              {isMobile ? (
                activeSegmentRenato !== null &&
                activeSegmentRenato >= 0 ? (
                  <p className="transition-colors duration-300 text-green-600 text-sm">
                    {
                      segmentsRenato[activeSegmentRenato]
                        .text
                    }
                  </p>
                ) : (
                  <p className="text-gray-700 italic">
                    {t('showmetranscription')}
                  </p>
                )
              ) : (
                segmentsRenato.map(
                  (
                    segment: TranscriptSegment,
                    index: number
                  ) => (
                    <div
                      key={index}
                      className={`flex md:ml-8 md:w-2/3 items-center transition-colors duration-300 ${
                        activeSegmentRenato === index
                          ? 'text-green-600 text-xs'
                          : 'text-gray-700 text-xs'
                      }`}
                    >
                      {activeSegmentRenato === index && (
                        <FaPlay className="mr-2" />
                      )}
                      <p>{segment.text}</p>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>

        <Divider />

        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <video
              ref={videoRefMaria}
              src="/videos/zero_problems_low.mp4"
              muted
              autoPlay
              playsInline
              controls
              onTimeUpdate={handleTimeUpdateMaria}
              className="w-full md:w-1/3 rounded-lg shadow-lg"
            />
            <div className="flex flex-col justify-center items-center pointer-events-none w-full md:w-2/3">
              <p className="text-6xl font-extrabold text-lilac">
                {countdown} {t('problems')}
              </p>
              <p className="mt-4 text-xl text-lilac">
                Marcia Leal
              </p>
            </div>
          </div>
        </div>

        <Divider />

        <div className="mt-12">
          <WrittenTestimonial
            text={t('writtenTextTatiana')}
            authorName="Greice Reinas"
            authorImage="/images/greice.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
