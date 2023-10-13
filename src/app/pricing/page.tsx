import PricingCard from '@/components/PricingCard';
import { Price } from '@/types';

import { Racing_Sans_One } from 'next/font/google';

import { client } from '../../../sanity/lib/client';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const query = `*[_type == "pricing"] { _id, title, price, description }`;

const Pricing = async () => {
  const prices = await client.fetch<Price[]>(query);

  return (
    <div className='px-6'>
      <h1 className={`${racingSansOne.className} text-6xl font-bold text-center pt-6 pb-12`}>
        Pricing
      </h1>
      <div className='max-w-sm sm:max-w-prose mx-auto grid grid-cols-1 grid-flow-row sm:grid-cols-2 gap-12 mb-12'>
        {prices.map((price) => (
          <PricingCard
            key={price._id}
            title={price.title}
            price={price.price}
            description={price.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
