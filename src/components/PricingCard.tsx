import { PricingCard } from '@/types';

const PricingCard = ({ title, price, description }: PricingCard) => {
  return (
    <div className=''>
      <h2 className={`text-4xl font-bold`}>{title}</h2>
      <h3 className='text-2xl py-4'>{price}</h3>
      {description.split('\n').map((line, i) => (
        <p key={i} className='text-lg'>
          {line}
        </p>
      ))}
    </div>
  );
};

export default PricingCard;
