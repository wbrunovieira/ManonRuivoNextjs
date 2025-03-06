import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/images/image-1.jpeg',
  '/images/image-2.jpg',
  '/images/image-3.jpg',
  '/images/image-4.jpeg',
  '/images/image-5.jpg',
  '/images/image-6.jpeg',
];

const MotionImage = motion(Image);

export default function ImageSliderHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(
        prevIndex => (prevIndex + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] md:w-[400px] lg:w-[500px] h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
      <AnimatePresence mode="wait">
        <MotionImage
          key={images[index]}
          src={images[index]}
          alt="Access Bars"
          fill
          sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
          placeholder="blur"
          blurDataURL="/images/placeholder.jpeg"
          style={{ objectFit: 'cover' }}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.55 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          priority={index === 0}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
}
