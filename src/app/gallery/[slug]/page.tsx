import { Photoshoot } from '@/types';

import { revalidatePath } from 'next/cache';
import { Racing_Sans_One } from 'next/font/google';
import Image from 'next/image';

import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const querySlugs = `*[_type == "photoshoot"] { "slug": slug.current }`;

export const generateStaticParams = async () => {
  const paths = await client.fetch<{ slug: string }[]>(querySlugs);
  return paths.map((path) => ({ id: path.slug }));
};

const getData = async (slug: string) => {
  'use server';
  const query = `*[_type == "photoshoot" && slug.current == "${slug}"] { _id, "slug": slug.current, title, type, "photos": photos[] {...,
    "aspectRatio": asset->metadata.dimensions.aspectRatio} }[0]`;
  const data = await client.fetch<Photoshoot>(query);
  revalidatePath(`/gallery/${slug}`);
  return data;
};

const Photoshoot = async ({ params }: { params: { slug: string } }) => {
  const photoshoot = await getData(params.slug);

  return (
    <div>
      <h1 className={`${racingSansOne.className} text-6xl font-bold text-center pt-6 pb-12`}>
        {photoshoot.title}
      </h1>
      <div className='w-full columns-1 sm:columns-2 md:columns-3 gap-0'>
        {photoshoot.photos.map((photo, i) => {
          return (
            <div key={i} className={`relative w-full h-auto`}>
              <Image
                src={urlForImage(photo).url()}
                alt={''}
                width={1000}
                height={1000}
                className='object-contain w-full h-auto'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photoshoot;
