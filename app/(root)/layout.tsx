import Navbar from '@/components/navbar/home-navbar';
import React from 'react';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id='scroll-container' className='overflow-hidden'>
        <article>{children}</article>
      </main>
    </>
  );
}
