'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

type Language = 'pt' | 'en' | 'es';

interface TranscriptSegment {
  start: number;
  end: number;
  text: string;
}

type TestimonialSegments = Record<
  Language,
  TranscriptSegment[]
>;

const testimonialSegments: TestimonialSegments = {
  pt: [
    {
      start: 0,
      end: 10,
      text: 'Olá, meu nome é Tatiana Barros, eu gostaria de compartilhar um pouquinho do que as sessões de barra de áxas tem feito em minha vida.',
    },
    {
      start: 10,
      end: 25,
      text: 'Eu tive quatro ou cinco sessões de barras com uma não e a palavra chave do que acontece das barras de áxas, na minha vida, é trazer consciência. Então coisas que você fica se debatendo a vida inteira e não sabe porque, com chega assim como um presente divino, te abre a consciência, te trazendo realmente respostas e outras vezes coisas que você mentia com ciência, que era um problema, então te mostra o problema e depois te traz a consciência.',
    },
    {
      start: 25,
      end: 40,
      text: 'Eu comecei a perder vários clientes e isso me deixava muito preocupada porque eram todos com mesmo problema. Então, não era com, em competência minha, era porque alguém tinha pedido trabalho, era porque alguém, sei lá, estava devendo muito conta hospitalar, era tudo com mesmo problema.',
    },
    {
      start: 40,
      end: 55,
      text: 'Então, nesse processo de pera de cliente, a consciência primeira que chegou foi a Copa Es sua, porque você está perdendo todos pelo mesmo problema, que é para o problema financeiros, ainda que eles não querem, eles têm que abandonar os seus serviços e a Copa Es sua está emitindo isso para o seu campo energético e está voltando como perdendo clientes, perdendo clientes, perdendo clientes.',
    },
    {
      start: 55,
      end: 70,
      text: 'Eu falei, meu Deus, como que a gente faz isso inconsciente? Então, eu fermei a primeira consciência.',
    },
    {
      start: 70,
      end: 85,
      text: 'Depois eu estava numa loja e tive uma trita mais interna do que qualquer coisa naquela loja, um desconforto e, pô, a mente faz assim, sabe, dá um... e aí me veio a consciência de que o problema é que você tem algumas traumas com a sua criança interior, alguns abandonos, alguns traumas, que você precisa dar para essa menina, que ela não teve.',
    },
    {
      start: 85,
      end: 100,
      text: 'Então você tem que se encontrar com ela toda noite e dar o que ela não teve. E a partir daí vai resolver seu problema. E de verdade, cada vez mais chegando o cliente, e zero, perno de clientes.',
    },
  ],
  en: [
    {
      start: 0,
      end: 10,
      text: "Hello, my name is Tatiana Barros, and I'd like to share a little bit about what the 'barra de áxas' sessions have done for my life.",
    },
    {
      start: 10,
      end: 25,
      text: "I had four or five sessions, and the key word in what happens in the 'barra de áxas' sessions in my life is bringing awareness. Things that you struggle with your entire life without knowing why suddenly come like a divine gift, opening your awareness and truly providing answers, and sometimes things you masked as issues become problems and then you are shown the problem before your awareness returns.",
    },
    {
      start: 25,
      end: 40,
      text: "I started losing several clients, and that made me very worried because they all had the same problem. It wasn't due to my competence, it was because someone had requested work, or maybe they owed a lot of hospital bills, all with the same issue.",
    },
    {
      start: 40,
      end: 55,
      text: "So, in this process of client loss, the first awareness that came was that you are losing them all due to the same financial problem. Even if they don't want to, they have to abandon their services, and this issue is being transmitted to your energy field, returning as losing clients, losing clients, losing clients.",
    },
    {
      start: 55,
      end: 70,
      text: 'I thought, my God, how do we do this unconsciously? Then I secured the first awareness.',
    },
    {
      start: 70,
      end: 85,
      text: 'Later, I was in a store and felt an inner turmoil unlike anything there, a discomfort and, well, the mind does this thing, you know, and then I became aware that the problem is that you have some traumas with your inner child, some abandonments, some issues that you need to give to that little girl who never received them.',
    },
    {
      start: 85,
      end: 100,
      text: 'So you need to connect with her every night and give her what she never had. And truly, as the client kept arriving, there were no more losses.',
    },
  ],
  es: [
    {
      start: 0,
      end: 10,
      text: "Hola, mi nombre es Tatiana Barros, y me gustaría compartir un poco de lo que las sesiones de 'barra de áxas' han hecho en mi vida.",
    },
    {
      start: 10,
      end: 25,
      text: "Tuve cuatro o cinco sesiones, y la palabra clave en lo que ocurre en las sesiones de 'barra de áxas' en mi vida es traer conciencia. Cosas con las que lidias toda tu vida sin saber por qué, de repente llegan como un regalo divino, abriendo tu conciencia y realmente proporcionando respuestas, y a veces las cosas que disimulabas como problemas se muestran y luego tu conciencia regresa.",
    },
    {
      start: 25,
      end: 40,
      text: 'Empecé a perder varios clientes, y eso me preocupaba mucho porque todos tenían el mismo problema. No era por mi competencia, sino porque alguien había solicitado trabajo, o tal vez debían muchas cuentas hospitalarias, todos con el mismo problema.',
    },
    {
      start: 40,
      end: 55,
      text: 'Entonces, en este proceso de pérdida de clientes, la primera conciencia que llegó fue que estás perdiendo a todos por el mismo problema financiero. Aunque no quieran, deben abandonar sus servicios, y esto se transmite a tu campo energético, regresando como pérdida de clientes, pérdida de clientes, pérdida de clientes.',
    },
    {
      start: 55,
      end: 70,
      text: 'Pensé, Dios mío, ¿cómo hacemos esto inconscientemente? Entonces aseguré la primera conciencia.',
    },
    {
      start: 70,
      end: 85,
      text: 'Luego, estaba en una tienda y sentí una turbulencia interna más fuerte que cualquier otra cosa en esa tienda, un malestar y, bueno, la mente hace esto, ya sabes, y entonces me di cuenta de que el problema es que tienes algunos traumas con tu niño interior, algunos abandonos, algunos traumas que necesitas darle a esa niña que no los tuvo.',
    },
    {
      start: 85,
      end: 100,
      text: 'Entonces, debes conectarte con ella cada noche y darle lo que nunca tuvo. Y verdaderamente, a medida que llegaban los clientes, ya no había más pérdidas.',
    },
  ],
};

export default function TestimonialSection() {
  const t = useTranslations('testimonial');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeSegment, setActiveSegment] = useState<
    number | null
  >(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
  const segments =
    testimonialSegments[language] ||
    testimonialSegments['pt'];

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const currentTime = videoRef.current.currentTime;
    const currentSegmentIndex = segments.findIndex(
      (segment: TranscriptSegment) =>
        currentTime >= segment.start &&
        currentTime < segment.end
    );
    setActiveSegment(currentSegmentIndex);
  };

  return (
    <section className="py-16 px-6 bg-gray-100 items-center mx-auto">
      <div className="max-w-3xl mx-auto items-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-lilac-dark mb-1">
            {t('title')}
          </h2>
          <p className="text-xl mb-8 text-lilac-dark">
            {t('subtitle')}
          </p>
        </div>
        <div className="flex gap-4 mb-8">
          <video
            ref={videoRef}
            src="/videos/ManonDepoimentTatiana.mp4"
            controls
            onTimeUpdate={handleTimeUpdate}
            className="w-1/3"
          />
          <div className="space-y-4">
            {isMobile ? (
              activeSegment !== null &&
              activeSegment >= 0 ? (
                <p className="transition-colors duration-300 text-green-600 font-bold">
                  {segments[activeSegment].text}
                </p>
              ) : (
                <p className="text-gray-700">
                  Aguardando reprodução...
                </p>
              )
            ) : (
              segments.map(
                (
                  segment: TranscriptSegment,
                  index: number
                ) => (
                  <p
                    key={index}
                    className={`transition-colors duration-300 ${
                      activeSegment === index
                        ? 'text-green-600 font-bold'
                        : 'text-gray-700'
                    }`}
                  >
                    {segment.text}
                  </p>
                )
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
