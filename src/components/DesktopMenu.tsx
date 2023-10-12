import Image from 'next/image';
import Link from 'next/link';

const DesktopMenu = () => {
  return (
    <div className='hidden md:block'>
      <div className='flex items-center justify-between h-24'>
        <Link href={'/'} className='flex items-center'>
          <Image src={'/chawla-media-logo.svg'} alt={'Chawla Media'} width={156} height={48} />
        </Link>
        <nav>
          <ul className='flex items-center gap-8'>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/'}>Gallery</Link>
            </li>
            <li>
              <Link href={'/'}>Pricing</Link>
            </li>
            <li>
              <Link href={'/'}>About</Link>
            </li>
            <li>
              <Link href={'/'}>Shop</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* MENU LINKS */}
      {/* <div className={open ? 'absolute top-16 left-0 w-full h-menu z-50 bg-primary-100' : 'hidden'}>
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
      </div> */}
    </div>
  );
};

export default DesktopMenu;
