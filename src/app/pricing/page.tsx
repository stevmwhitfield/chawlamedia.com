import PricingCard from '@/components/PricingCard';

import { Racing_Sans_One } from 'next/font/google';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const Pricing = () => {
  const temp = [
    {
      id: 0,
      title: 'Portraits',
      price: 'Starting at $100',
      description:
        'Sint non blanditiis eum suscipit quia sed qui aut. Nostrum voluptatibus quam rem et molestias. Et quod tempora ut. Blanditiis sequi vitae eos quis.',
    },
    {
      id: 1,
      title: 'Cinematics',
      price: 'Starting at $400',
      description:
        'Sint non blanditiis eum suscipit quia sed qui aut. Nostrum voluptatibus quam rem et molestias. Et quod tempora ut. Blanditiis sequi vitae eos quis.',
    },
    {
      id: 2,
      title: 'Car - Stills',
      price: 'Starting at $200',
      description:
        'Sint non blanditiis eum suscipit quia sed qui aut. Nostrum voluptatibus quam rem et molestias. Et quod tempora ut. Blanditiis sequi vitae eos quis.',
    },
    {
      id: 3,
      title: 'Car - Stills + Rollers',
      price: 'Starting at $250',
      description:
        'Sint non blanditiis eum suscipit quia sed qui aut. Nostrum voluptatibus quam rem et molestias. Et quod tempora ut. Blanditiis sequi vitae eos quis.',
    },
  ];

  return (
    <div className='px-6'>
      <h1 className={`${racingSansOne.className} text-6xl font-bold text-center pt-6 pb-12`}>
        Pricing
      </h1>
      <div className='container mx-auto flex flex-wrap gap-12 mb-12'>
        {temp.map((card) => (
          <PricingCard
            key={card.id}
            title={card.title}
            price={card.price}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
