import GalleryCard from '@/components/GalleryCard';
import { Photoshoot } from '@/types';

import { revalidatePath } from 'next/cache';
import { Racing_Sans_One } from 'next/font/google';

import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const getData = async () => {
  'use server';
  const query = `*[_type == "photoshoot"] { _id, "slug": slug.current, title, type, photos }`;
  const data = await client.fetch<Photoshoot[]>(query);
  revalidatePath('/gallery');
  return data;
};

const Gallery = async () => {
  const photoshoots = await getData();

  return (
    <div>
      <h1 className={`${racingSansOne.className} text-6xl font-bold text-center pt-6 pb-12`}>
        Gallery
      </h1>
      <div className='w-full columns-1 sm:columns-2 md:columns-3 gap-0'>
        {photoshoots.map((card) => (
          <GalleryCard
            key={card._id}
            img={urlForImage(card.photos[0]).url()}
            href={card.slug}
            title={card.title}
            description={card.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
