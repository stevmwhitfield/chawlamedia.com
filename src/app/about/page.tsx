import { Racing_Sans_One } from 'next/font/google';
import Image from 'next/image';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const About = () => {
  return (
    <div className='container mx-auto px-6'>
      <h1 className={`${racingSansOne.className} text-6xl font-bold text-center pt-6 pb-12`}>
        Sunishth Chawla
      </h1>
      <div className='flex justify-center mb-12'>
        <Image
          src={'/sunny-chawla.jpg'}
          alt={'Sunny Chawla'}
          width={256}
          height={256}
          className='rounded-full'
        />
      </div>
      <div className='max-w-prose mx-auto'>
        <p className='text-lg'>
          It all started when my dad would have me use his huge DSLRs to take pictures of the
          family. Every time I would take a picture, it would be blurry, uncentered, and nowhere
          near professional. Over the course of five years, I have developed the technique of
          photography; whether it be of cars, human subjects, or nature. Having just bought my
          first, {'very own'}
          camera, I have finally gotten the freedom to travel to many parts of the country that I
          never knew existed. Since then, I have been clicking away and satisfying not only my
          clientele, but my own self as well.
        </p>
        <br />
        <p className='text-lg mb-12'>
          Alongside being your photographer, I want to teach you what it is like to pick up a hobby
          like mine and actually be able to go forth with it. The process of picking up a camera and
          taking a picture is intricate enough, but there is a lot behind behind the scenes that
          goes on to capture that vivid shot that we want to show our friends, family, and the whole
          world.
        </p>
      </div>
    </div>
  );
};

export default About;
