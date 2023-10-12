import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <header className='bg-primary-100 relative px-4 md:px-12'>
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Navbar;
