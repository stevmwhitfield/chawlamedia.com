import { NavLink } from '@/types';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const links: NavLink[] = [
    { href: '/', label: 'home' },
    { href: '/gallery', label: 'gallery' },
    { href: '/pricing', label: 'pricing' },
    { href: '/about', label: 'about' },
    // { href: '/', label: 'shop' },
  ];

  return (
    <header className='bg-primary-100 relative px-4 md:px-12'>
      <MobileMenu links={links} />
      <DesktopMenu links={links} />
    </header>
  );
};

export default Navbar;
