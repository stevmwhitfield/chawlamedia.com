import { NavLink } from '@/types';

import Image from 'next/image';
import Link from 'next/link';

const DesktopMenu = ({ links }: { links: NavLink[] }) => {
  return (
    <div className='hidden md:block'>
      <div className='flex items-center justify-between h-24'>
        <Link href={'/'} className='flex items-center'>
          <Image src={'/chawla-media-logo.svg'} alt={'Chawla Media'} width={156} height={48} />
        </Link>
        <nav>
          <ul className='flex items-center gap-8'>
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className='capitalize text-xl'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopMenu;
