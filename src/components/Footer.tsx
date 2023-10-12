const Footer = () => {
  return (
    <footer className='absolute bottom-4 left-0 w-full z-40 flex items-center justify-center'>
      <span className='text-sm text-primary-100'>
        © Chawla Media {new Date().getFullYear()}. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
