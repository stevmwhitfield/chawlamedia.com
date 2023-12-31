import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chawla Media',
  description: 'Photography, video edits, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} relative flex flex-col`}>
        <Navbar />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
