import { GalleryCard } from '@/types';

import { Racing_Sans_One } from 'next/font/google';
import Image from 'next/image';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const GalleryCard = ({ img, title, description }: GalleryCard) => {
  return (
    <div className='relative w-full aspect-[3/2] group'>
      <Image src={img} alt={title} className='object-cover group-hover:grayscale' fill />
      <div className='invisible group-hover:visible absolute inset-0 flex flex-col items-center justify-center gap-2 bg-primary-900 bg-opacity-50'>
        <h2 className={`capitalize text-5xl text-primary-100 font-bold ${racingSansOne.className}`}>
          {title}
        </h2>
        <p className='capitalize text-2xl text-primary-200'>{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
