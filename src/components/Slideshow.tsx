'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Slideshow = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images.length]);

  return (
    <div className='relative w-full h-full'>
      <div className='absolute w-full h-full bg-primary-900 opacity-75 z-10'></div>
      {images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt={'car photo'}
          className={`object-cover transition-opacity ease-in-out duration-1000 ${
            i === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={currentIndex === 0}
          quality={50}
          fill
        />
      ))}
    </div>
  );
};

export default Slideshow;
