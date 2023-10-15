import './globals.css';
import type { Metadata } from 'next';
import { Arvo, Montserrat } from 'next/font/google';
import Footer from '@/components/footer/footer';
import ScrollObserver from '@/lib/scroll-observer';

const arvo = Arvo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-arvo',
});
const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-montserrat',
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
      <body className={`${montserrat.variable} ${arvo.variable}`}>
        <ScrollObserver>
          {children}
          <Footer />
        </ScrollObserver>
      </body>
    </html>
  );
}
