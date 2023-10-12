import Slideshow from '@/components/Slideshow';

import { Racing_Sans_One } from 'next/font/google';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const Home = () => {
  const photos = ['/white-car-photo.jpg', '/red-car-photo.jpg'];

  return (
    <>
      <div className='absolute top-16 md:top-24 left-0 w-full z-20 h-main md:h-main-xl flex items-center justify-center'>
        <h1
          className={`text-2xl md:text-3xl font-bold text-center text-primary-100 ${racingSansOne.className}`}
        >
          Chawla Media
        </h1>
      </div>
      <Slideshow images={photos} />
    </>
  );
};

export default Home;
