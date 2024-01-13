import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import ScrollObserver from '@/lib/scroll-observer';
import Navbar from '@/components/navbar/navbar';
import localFont from 'next/font/local';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter',
});
const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const sherika = localFont({
  src: '/static-fonts/Sherika-Regular.ttf',
  display: 'swap',
  variable: '--font-sherika',
});

export const metadata: Metadata = {
  title: 'The ArtistBuilding',
  description: 'VFX Powerhouse',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} ${inter.variable} ${sherika.variable}`}
      >
        <ScrollObserver>
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </ScrollObserver>
      </body>
    </html>
  );
}
