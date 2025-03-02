import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MenuMobileProps {
  isOpen: boolean;
  onToggle?: (checked: boolean) => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  isOpen,
  onToggle,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const span1Ref = useRef<HTMLSpanElement | null>(null);
  const span2Ref = useRef<HTMLSpanElement | null>(null);
  const span3Ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(span1Ref.current, {
        top: '50%',
        translateY: '-50%',
        rotate: 45,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(span2Ref.current, {
        top: '50%',
        translateY: '-50%',
        rotate: -45,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(span3Ref.current, {
        translateX: '-50px',
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(span1Ref.current, {
        top: '10%',
        translateY: 0,
        rotate: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(span2Ref.current, {
        top: '50%',
        translateY: 0,
        rotate: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(span3Ref.current, {
        translateX: '0px',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isOpen]);

  const handleChange = () => {
    const checked = inputRef.current?.checked;
    if (onToggle) {
      onToggle(!!checked);
    }
  };

  return (
    <label className="relative inline-block cursor-pointer select-none text-[20px]">
      <input
        ref={inputRef}
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={isOpen}
        onChange={handleChange}
      />
      <div className="relative w-[1.3em] h-[1.3em]">
        <span
          ref={span1Ref}
          className="absolute left-0 w-[32px] h-[2px] bg-lilac-dark transition-all duration-300 ease-in-out"
          style={{ top: '10%' }}
        />
        <span
          ref={span2Ref}
          className="absolute left-0 w-[32px] h-[2px] bg-lilac-dark transition-all duration-300 ease-in-out"
          style={{ top: '50%' }}
        />
        <span
          ref={span3Ref}
          className="absolute left-0 w-[32px] h-[2px] bg-lilac-dark transition-all duration-300 ease-in-out"
          style={{ top: '90%' }}
        />
      </div>
    </label>
  );
};

export default MenuMobile;
