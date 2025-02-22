'use client';
import { useTranslations } from 'next-intl';
import { FaBrain } from 'react-icons/fa';

const AccessBarsStudy: React.FC = () => {
  const t = useTranslations('study');

  return (
    <section className="relative py-12 bg-gray-50 mt-16 ">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 mt-16 mb-16">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1600 57"
        >
          <defs>
            <linearGradient
              id="waveGradient"
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
            fill="url(#waveGradient)"
            d="M-48,57c72.4-0.3,183.7-6,309.1-29.3c252.2-47.7,447.2-2.1,658.2,16.4
        c225.6,19.5,471-38,641.9-72.2c35.2-7.4,65.9-13.2,89.8-16.6v61H-48z"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 mt-16">
        <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2 pt-16">
          <FaBrain className="text-lilac-dark" />
          {t('title')}
        </h2>

        <p className="text-lg text-gray-700 mb-4">
          {t('analysis')}
        </p>

        <p className="text-lg text-gray-700 mb-4">
          {t('observations')}
        </p>

        <p className="text-lg text-gray-700 mb-6">
          {t('conclusion')}
        </p>

        <div className="mb-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-auto rounded shadow"
          >
            <source
              src="/videos/manon_ruivosecao.mp4_optmised.mp4"
              type="video/mp4"
            />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/watch?v=axpu3OVCnno"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green hover:bg-green/80 text-white font-semibold py-2 px-6 rounded transition-colors mb-8"
          >
            {t('button')}
          </a>
        </div>
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
        c252.2,47.7,447.2,2.1,658.2-16.4c225.6-19.5,471,38,641.9,72.2
        c35.2,7.4,65.9,13.2,89.8,16.6V0H-48z"
          />
        </svg>
      </div>
    </section>
  );
};

export default AccessBarsStudy;
