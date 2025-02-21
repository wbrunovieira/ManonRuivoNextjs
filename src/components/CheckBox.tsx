// src/components/Checkbox.tsx
'use client';

import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function Checkbox({
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <>
      <label className="flex  relative cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer absolute opacity-0 cursor-pointer"
        />
        <span
          className={`
            block
            h-3 w-3
            border border-gray-300
            rounded
            bg-white
            transition-all duration-300 ease
            hover:shadow-md
            relative
            peer-checked:bg-lilac-dark
            peer-checked:border-lilac-dark

            /* Pseudo-elemento para o "tick" */
            after:content-['']
            after:absolute
            after:top-1/2
            after:left-1/2
            after:-translate-x-1/2
            after:-translate-y-1/2
            after:rotate-45
            after:scale-0
            after:w-[4px]
            after:h-[7px]
            after:border-r-[1.5px]
            after:border-b-[1.5px]
            after:border-white
            peer-checked:after:scale-100
            peer-checked:after:transition-transform peer-checked:after:duration-300
          `}
        ></span>
      </label>
      <style jsx>{`
        label span::after {
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  );
}
