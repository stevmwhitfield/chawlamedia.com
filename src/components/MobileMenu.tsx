'use client';

import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className='md:hidden'>
      {/* LOGO & MENU BUTTON */}
      <div className='flex items-center justify-between h-16'>
        <Link href={'/'} className='flex items-center'>
          <Image src={'/chawla-media-logo.svg'} alt={'Chawla Media'} width={104} height={32} />
        </Link>
        <button onClick={toggleMenu} className='inline-block pointer'>
          <span className='flex items-center justify-center gap-1 px-1 h-8'>
            <span className='w-6 h-6'>{open ? <XMarkIcon /> : <Bars3Icon />}</span>
          </span>
        </button>
      </div>
      {/* MENU LINKS */}
      <div className={open ? 'absolute top-16 left-0 w-full h-main z-50 bg-primary-100' : 'hidden'}>
        <nav className='h-full flex items-center justify-center'>
          <ul className='capitalize text-lg flex flex-col justify-between w-full h-full max-h-96 -mt-16'>
            <li>
              <Link href={'/'} className='flex justify-center w-full py-4'>
                Home
              </Link>
            </li>
            <li>
              <Link href={'/'} className='flex justify-center w-full py-4'>
                Gallery
              </Link>
            </li>
            <li>
              <Link href={'/'} className='flex justify-center w-full py-4'>
                Pricing
              </Link>
            </li>
            <li>
              <Link href={'/'} className='flex justify-center w-full py-4'>
                About
              </Link>
            </li>
            <li>
              <Link href={'/'} className='flex justify-center w-full py-4'>
                Shop
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
