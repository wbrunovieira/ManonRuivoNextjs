import React from 'react';
import Image from 'next/image';

interface WrittenTestimonialProps {
  text: string;
  authorName: string;
  authorImage: string;
}

const WrittenTestimonial: React.FC<
  WrittenTestimonialProps
> = ({ text, authorName, authorImage }) => {
  return (
    <figure className="mt-12 max-w-2xl mx-auto px-4">
      <blockquote className="text-lg text-gray-800 text-center italic">
        {text}
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-center space-x-4">
        <Image
          src={authorImage}
          alt={`${authorName} profile picture`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <span className="text-sm font-medium text-gray-700">
          {authorName}
        </span>
      </figcaption>
    </figure>
  );
};

export default WrittenTestimonial;
