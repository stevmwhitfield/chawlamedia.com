import GalleryCard from '@/components/GalleryCard';

import { Racing_Sans_One } from 'next/font/google';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const Gallery = () => {
  const temp = [
    {
      id: 0,
      img: '/red-car-photo.jpg',
      title: 'red car',
      description: 'car stills',
    },
    {
      id: 1,
      img: '/white-car-photo.jpg',
      title: 'white car',
      description: 'car rollers',
    },
    {
      id: 3,
      img: '/red-car-photo.jpg',
      title: 'red car',
      description: 'car stills',
    },
    {
      id: 4,
      img: '/white-car-photo.jpg',
      title: 'white car',
      description: 'car rollers',
    },
    {
      id: 5,
      img: '/red-car-photo.jpg',
      title: 'red car',
      description: 'car stills',
    },
    {
      id: 6,
      img: '/white-car-photo.jpg',
      title: 'white car',
      description: 'car rollers',
    },
  ];

  return (
    <div>
      <h1 className={`${racingSansOne.className} text-6xl font-bold text-center pt-6 pb-12`}>
        Gallery
      </h1>
      <div className='grid grid-cols-1 row sm:grid-cols-2 lg:grid-cols-3'>
        {temp.map((card) => (
          <GalleryCard
            key={card.id}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
