import { PricingCard } from '@/types';

const PricingCard = ({ title, price, description }: PricingCard) => {
  return (
    <div className='mx-auto max-w-prose'>
      <h2 className={`text-4xl font-bold`}>{title}</h2>
      <h3 className='text-2xl py-4'>{price}</h3>
      <p className='text-lg'>{description}</p>
    </div>
  );
};

export default PricingCard;
